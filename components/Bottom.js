import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Bottom({navigation}) {
  return (
    <View style={{flexDirection:'row',padding:10}}>
      <Pressable onPress={function(){navigation.navigate('All Entries')}} style={{alignItems:'center'}}>
        <MaterialCommunityIcons name="tea" size={24} color="black" />
        <Text>All Entries</Text>
      </Pressable>
      <View style={{width:40}}></View>
      <Pressable onPress={function(){navigation.navigate('Over-limit Entries' )}} style={{alignItems:'center'}}>
      <FontAwesome name="exclamation" size={24} color="black" />
        <Text>Over-limit Entries</Text>
      </Pressable>
    </View>
  )
}