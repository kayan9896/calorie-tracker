import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function Bottom({navigation}) {
  return (
    <View style={{flexDirection:'row'}}>
      <Pressable onPress={function(){navigation.navigate('All Entries')}}>
        <Text>All Entries</Text>
      </Pressable>
      <View style={{width:40}}></View>
      <Pressable onPress={function(){navigation.navigate('Over-limit Entries' )}}>
        <Text>Over-limit Entries</Text>
      </Pressable>
    </View>
  )
}