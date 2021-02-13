import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllPosts from './views/allPosts';
import Profile from './views/profile';
import PostDetails from './views/postDetails';

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();
const { Navigator: StackNavigator, Screen: StackScreen } = createStackNavigator();

const HomeStack = () => (

  <StackNavigator initialRouteName="Home"
    screenOptions={{
      headerStyle: { backgroundColor: "red" },
    }}
  >
    <StackScreen
      name="Home"
      component={AllPosts}
      options={{
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>BLOGPOST </Text>
            <FontAwesome name="newspaper-o" size={30} color="white" />
          </View>
        ),
      }}
    />
    <StackScreen
      name="PostDetails"
      component={PostDetails}
      options={({ navigation }) => ({
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={[styles.headerTitle,{marginRight:25}]}>DETAILS</Text>
          </View>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerTitleContainer}>
            <FontAwesome name="chevron-left" size={20} color="white" style={{marginLeft:10}}/>
            <Text style={[styles.headerTitle, { fontSize: 15 }]}>BACK</Text>
          </TouchableOpacity>
        ),
      })}
    />


  </StackNavigator>
)



const RootNavigator = () => (
  <NavigationContainer>

    <TabNavigator
      initialRouteName="AllPosts"
      tabBarOptions={{
        inactiveTintColor: "black",
        activeTintColor: "red",
        style: { backgroundColor: "white" },
        labelStyle: { fontSize: 18, fontWeight: '900' },
      }}
    >
      <TabScreen
        name="HOME"
        component={HomeStack}
        options={{
          title: 'HOME',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={22} color={color} style={{marginTop:6}} />
        }}
      />
      <TabScreen name="PROFILE" component={Profile}
        options={{
          title: 'PROFILE',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={20} color={color} style={{marginTop:5}} />
        }} />
    </TabNavigator>
  </NavigationContainer>
)


const styles = StyleSheet.create({
  headerTitle: {
    color: 'white',
    paddingHorizontal: 10,
    fontSize: 25,
    fontWeight: '900',
    
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    alignSelf: 'center'
  }
})


export default RootNavigator;