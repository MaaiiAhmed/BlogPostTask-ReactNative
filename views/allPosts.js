import React from 'react';
import {
    Text, View, TouchableOpacity,
    FlatList, StyleSheet,
} from 'react-native';

import Post from '../post';

export default function AllPosts({ navigation }) {

    const [posts, setPosts] = React.useState([]);

    const getPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.ok) {
            setPosts((await response.json()));
        }
    }

    const renderItem = ({ item }) => {
        return (
            <Post post={item} onPress={() => navigation.navigate('PostDetails', { post: item })} />
        );
    }
    
    return (
        <View style={styles.container}>
            {
                posts.length
                    ? (
                        <FlatList
                            data={posts}
                            style={styles.posts}
                            renderItem={renderItem}
                            keyExtractor={post => post.id.toString()}
                        />
                    )
                    : (
                        <View style={styles.btnContiner}>

                            <TouchableOpacity onPress={getPosts} style={styles.btn}>
                                <Text style={styles.btnText}>GET POSTS</Text>
                            </TouchableOpacity>

                        </View>
                    )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerContent: {
        justifyContent: 'center',
    },
    posts: {
        padding: 20,
    },
    btnContiner: {
        alignItems: 'center',
        marginVertical: 250,
    },
    btn: {
        alignItems: 'center',
        backgroundColor: "red",
        width: 200,
        padding: 15,
        borderRadius: 30,
    },
    btnText: {
        color: 'white',
        fontWeight: '900',
        fontFamily: 'Arial',
        fontSize: 22,
    },
});
