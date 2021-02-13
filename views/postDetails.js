import React from 'react';
import {
    Text, ScrollView, Image, StyleSheet,
} from 'react-native';

export default function postDetails({ route }) {
    const { post } = route.params;
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
            <Image source={{ uri: 'https://source.unsplash.com/random' }} style={styles.image} />
            <Text style={styles.title}>
                {post.title}
            </Text>
            <Text style={[styles.title, { fontWeight: '700',color:"#696969" }]}>
                {post.body}
            </Text>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 400,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop:3
    },
    container: {
        paddingVertical: 20
    },
    title: {
        fontWeight: '900',
        fontSize: 20,
        padding: 20,
    }
});