import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Plus({navigation}) {
  return (
    <Pressable onPress={function(){navigation.navigate('Add')}}>
          <Ionicons name="add" size={24} color='white' />
    </Pressable>
  )
}