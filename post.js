import React from 'react';
import {
  View, Image, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

export default ({ post, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://source.unsplash.com/random' }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text
        style={styles.title}
      >
        {post.title}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 165,
    borderRadius: 10,
  },
  title: {
    fontWeight: '900',
    fontSize: 22,
    paddingVertical: 20
  },
  container: {
    marginBottom: 40,
    justifyContent: 'center'
  }
});