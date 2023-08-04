import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import helper, { colour } from './helper';
import { useRoute } from '@react-navigation/native';

export default function Bottom({navigation}) {
  const r=useRoute()
  return (
    <View style={helper.bottomcontain}>
      <Pressable onPress={function(){navigation.navigate('All Entries')}} 
      style={({ pressed }) => {return [{alignItems:'center'},pressed && helper.ripple];}}
      disabled={r.name==='All Entries'}>
        <MaterialCommunityIcons name="tea" size={24} color={(r.name==='All Entries')?colour.yellow:colour.white} />
        <Text style={{color:(r.name==='All Entries')?colour.yellow:colour.white}}>    All Entries    </Text>
      </Pressable>
      <View style={{width:40}}></View>
      <Pressable onPress={function(){navigation.navigate('Over-limit Entries' )}} 
      style={({ pressed }) => {return [{alignItems:'center'},pressed && helper.ripple]}}
      disabled={r.name==='Over-limit Entries'}>
      <FontAwesome name="exclamation" size={24} color={(r.name==='Over-limit Entries')?colour.yellow:colour.white} />
        <Text style={{color:(r.name==='Over-limit Entries')?colour.yellow:colour.white}}>Over-limit Entries</Text>
      </Pressable>
    </View>
  )
}