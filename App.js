import * as React from 'react';
import { Button, Text, View, BlurView, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => navigation.navigate('Details')}>
        <Image source={require('./assets/icons8-settings-24.png')} />
      </Pressable>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => navigation.navigate('Details')}>
        <Image source={require('./assets/icons8-settings-24.png')} />
      </Pressable>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'purple',
          height: 50,
          activeTintColor: 'pink',
        },
        tabBarItemStyle: {
          backgroundColor: '#B65FCF',
          margin: 5,
          borderRadius: 10,
          activeTintColor: 'pink',
        }
      }}
        TabBarOptions={{
          activeTintColor: 'pink',
        }}
        renderLabel={{
          color: 'white',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} options={{ tabBarBadge: 999 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );

  const styles = StyleSheet.create({

  })

}
