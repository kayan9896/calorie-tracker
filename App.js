import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Allentries from './screens/Allentries.js';
import Overlimit from './screens/Overlimit.js';
import Edit from './screens/Edit.js';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="All Entries" component={Allentries} />
        <Stack.Screen name="Over-limit Entries" component={Overlimit} options={{headerBackVisible:false, headerTintColor:'white', headerStyle:{backgroundColor:'purple'}}}/>
        <Stack.Screen name="Edit" component={Edit} options={{headerBackTitle:'back'}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

