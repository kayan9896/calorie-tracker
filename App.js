import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Allentries from './screens/Allentries.js';
import Overlimit from './screens/Overlimit.js';
import Edit from './screens/Edit.js';
import Add from './screens/Add.js';
import Plus from './components/Plus.js';
import { colour } from './components/helper.js';
import helper from './components/helper.js';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="All Entries" component={Allentries} 
        options={helper.opt}/>
        <Stack.Screen name="Over-limit Entries" component={Overlimit} 
        options={helper.opt}/>
        <Stack.Screen name="Edit" component={Edit} options={{headerTintColor:colour.white, 
        headerStyle:{backgroundColor:colour.purple},
        headerBackTitle:'back'}}/>
        <Stack.Screen name="Add" component={Add} options={{headerTintColor:colour.white, 
        headerStyle:{backgroundColor:colour.purple},
        headerBackTitle:'back'}}/>
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

