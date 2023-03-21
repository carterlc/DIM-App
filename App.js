import * as React from 'react';
import { Button, Text, View, BlurView, Pressable, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#202020' }}>
      <Text style={{color: 'white', fontSize: 20, marginBottom: 20, marginTop: 10}}>How to use DIM (Destiny Item Manager)</Text>
      <Text style={{color: 'white'}}>1. Sign in using you Bungie name and information</Text>
      <Text style={{color: 'white'}}>2. Navigate to your Vault. It should be on the second tab.</Text>
      <Text style={{color: 'white'}}>3. </Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#202020' }}>
      <Pressable style={styles.settings} onPress={() => navigation.navigate('Details')}>
        <Image source={require('./assets/icons8-settings-24.png')} />
      </Pressable>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#202020' }}>
      <Pressable style={styles.settings} onPress={() => navigation.navigate('Details')}>
        <Image source={require('./assets/icons8-settings-24.png')} />
      </Pressable>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white', // Change font color to white
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white', // Change font color to white
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  settings: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  plainText: {
    backgroundColor: 'white'
  }
})

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          height: 45,
        },
      }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
