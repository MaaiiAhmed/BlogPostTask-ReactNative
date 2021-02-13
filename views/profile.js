import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const Profile = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <View ><Image style={styles.header} source={require('../assets/cover1.jpg')} /></View>
            <Image style={styles.avatar} source={require('../assets/avatar.png')} />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>Mai Ahmed</Text>
                    <Text style={styles.info}>Frontend Developer</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
                        <Text style={{ color: "white" }}>My Posts</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130,
        backgroundColor: "white"
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "black",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "red",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 23,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 30,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        borderRadius: 30,
        backgroundColor: "red",
    },
});

export default Profile