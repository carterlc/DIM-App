import * as React from 'react';
import { Button, Text, View, BlurView, Pressable, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import items from './destiny-items.json'

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#202020' }}>
      <Text style={{ color: 'white', fontSize: 20, marginBottom: 20, marginTop: 10 }}>How to use DIM (Destiny Item Manager)</Text>
      <Text style={{ color: 'white' }}>1. Sign in using you Bungie name and information</Text>
      <Text style={{ color: 'white' }}>2. Navigate to your Vault. It should be on the second tab.</Text>
      <Text style={{ color: 'white' }}>3. </Text>
    </View>
  );
}

function CharacterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#202020' }}>
      <Pressable style={styles.settings} onPress={() => navigation.navigate('Settings')}>
        <Image source={require('./assets/icons8-settings-24.png')} />
      </Pressable>
    </View>
  );
}

function VaultScreen({ navigation }) {
  console.log('here here')
  console.log(typeof items);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#202020', color: 'white' }}>
      <Pressable style={styles.settings} onPress={() => navigation.navigate('Settings')}>
        <Image source={require('./assets/icons8-settings-24.png')} />
      </Pressable>
      {items.kinetic.map(item => (
        <Pressable key={item.id}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 50, height: 50 }}
          />
        </Pressable>

      ))}
    </View>
  );
}

{/* <Image source={{
  uri: 'https://reactnative.dev/img/tiny_logo.png',
}} style={{ width: 50, height: 50 }} /> */}


const CharacterStack = createNativeStackNavigator();

function CharacterStackScreen() {
  return (
    <CharacterStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white', // Change font color to white
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <CharacterStack.Screen name="Character" component={CharacterScreen} />
      <CharacterStack.Screen name="Settings" component={SettingsScreen} />
    </CharacterStack.Navigator>
  );
}

const VaultStack = createNativeStackNavigator();

function VaultStackScreen() {
  return (
    <VaultStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white', // Change font color to white
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <VaultStack.Screen name="Vault" component={VaultScreen} />
      <VaultStack.Screen name="Settings" component={SettingsScreen} />
    </VaultStack.Navigator>
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
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen name="Character" component={CharacterStackScreen} />
        <Tab.Screen name="Vault" component={VaultStackScreen} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}
