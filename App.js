import * as React from 'react';
import { Button, Text, View, BlurView, Pressable, Image, StyleSheet, useState, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import items from './destiny-items.json'
import { SafeAreaView } from 'react-native-safe-area-context';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#202020', padding: 30 }}>
      <Text style={{ color: 'white', fontSize: 20, marginBottom: 20, marginTop: 10, fontWeight: 'bold' }}>Settings</Text>
      <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 16 }}>Custom Stat Total</Text>
      <Text style={{ color: 'white', marginBottom: 10 }}>Choose desired armor stats to make a custom total stat. Custom stats will appear in the item popup, organizer, and compare.</Text>
      <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 16 }}>Perk display in item group</Text>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>List</Text>
      <Text style={{ color: 'white', marginBottom: 10 }}>Grid</Text>
      <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 16 }}>Show stat quality rating on armour</Text>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>Yes</Text>
      <Text style={{ color: 'white' }}>No</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: '#202020', flex: 1 }}>
          <View style={{ margin: 30, flexDirection: 'row' }}>
            <Image
              source={{ uri: "https://www.bungie.net/common/destiny2_content/icons/90f62236b87badbb2f56c104315f63e2.jpg" }}
              style={{ width: 140, height: 140 }}
            />
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
              <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginLeft: 20, marginBottom: 5 }}>CLAWS OF AHAMKARA</Text>
              <Text style={{ color: 'white', fontSize: 20, marginLeft: 20 }}>Exotic / Warlock / Arms</Text>
            </View>
          </View>
          <View style={{ marginLeft: 30, marginRight: 30 }}>
            {/* Mobility */}
            <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>Mobility</Text>
            <View style={{ flexDirection: 'row', flexWrap: "wrap", marginBottom: 20 }}>
              <View style={{ backgroundColor: 'white', width: 80, height: 20 }}></View>
              <Text style={{ marginLeft: 20, fontSize: 16, color: 'orange' }}>+ 8</Text>
            </View>
            {/* Resilience */}
            <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>Resilience</Text>
            <View style={{ flexDirection: 'row', flexWrap: "wrap", marginBottom: 20 }}>
              <View style={{ backgroundColor: 'white', width: 200, height: 20 }}></View>
              <Text style={{ marginLeft: 20, fontSize: 16, color: 'orange' }}>+ 20</Text>
            </View>
            {/* Recovery */}
            <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>Recovery</Text>
            <View style={{ flexDirection: 'row', flexWrap: "wrap", marginBottom: 20 }}>
              <View style={{ backgroundColor: 'white', width: 300, height: 20 }}></View>
              <Text style={{ marginLeft: 20, fontSize: 16, color: 'orange' }}>+ 30</Text>
            </View>
            {/* Discipline */}
            <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>Discipline</Text>
            <View style={{ flexDirection: 'row', flexWrap: "wrap", marginBottom: 20 }}>
              <View style={{ backgroundColor: 'white', width: 150, height: 20 }}></View>
              <Text style={{ marginLeft: 20, fontSize: 16, color: 'orange' }}>+ 15</Text>
            </View>
            {/* Intellect */}
            <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>Intellect</Text>
            <View style={{ flexDirection: 'row', flexWrap: "wrap", marginBottom: 20 }}>
              <View style={{ backgroundColor: 'white', width: 190, height: 20 }}></View>
              <Text style={{ marginLeft: 20, fontSize: 16, color: 'orange' }}>+ 19</Text>
            </View>
            {/* Strength */}
            <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>Strength</Text>
            <View style={{ flexDirection: 'row', flexWrap: "wrap", marginBottom: 20 }}>
              <View style={{ backgroundColor: 'white', width: 250, height: 20 }}></View>
              <Text style={{ marginLeft: 20, fontSize: 16, color: 'orange' }}>+ 25</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CharacterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#202020', padding: 30 }}>
      <Pressable style={styles.settings} onPress={() => navigation.navigate('Settings')}>
        <Image source={require('./assets/icons8-settings-24.png')} />
      </Pressable>
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Gauntlets</Text>
      <Pressable onPress={() => navigation.navigate('Details')}>
        <Image
          source={{ uri: "https://www.bungie.net/common/destiny2_content/icons/90f62236b87badbb2f56c104315f63e2.jpg" }}
          style={{ width: 60, height: 60 }}
        />
      </Pressable >

    </View >
  );
}

function VaultScreen({ navigation }) {

  // const [showItems, setShowItems] = useState([]);

  // const addToCharacter = (id) => {
  //   const itemToAdd = items.find((item) => item.id === id);
  //   setShowItems([...showItems, itemToAdd])
  // }
  return (
    <View style={{ flex: 1, backgroundColor: '#202020', color: 'white', flexDirection: 'row', padding: 20, flexWrap: 'wrap' }}>
      <Pressable style={styles.settings} onPress={() => navigation.navigate('Settings')}>
        <Image source={require('./assets/icons8-settings-24.png')} />
      </Pressable>
      {items.map(item => (
        <Pressable style={{ margin: 5 }} key={item.id} onPress={() => { addToCharacter(id) }}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 50, height: 50 }}
          />
        </Pressable>
      ))}
    </View>
  );
}

const CharacterStack = createNativeStackNavigator();

function CharacterStackScreen() {
  return (
    <CharacterStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <CharacterStack.Screen name="Character" component={CharacterScreen} />
      <CharacterStack.Screen name="Details" component={DetailsScreen} />
      <VaultStack.Screen name="Settings" component={SettingsScreen} />
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
        headerTintColor: 'white',
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
          showIcon: false,
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
