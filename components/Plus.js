import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import helper from './helper';

export default function Plus({navigation}) {
  return (
    <Pressable onPress={function(){navigation.navigate('Add')}}
    style={({pressed})=>{return [pressed&&helper.ripple]}}>
          <Ionicons name="add" size={24} color='white' />
    </Pressable>
  )
}