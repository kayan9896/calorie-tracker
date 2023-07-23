import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Bottom from '../components/Bottom'
import EntriesList from '../components/EntriesList'

export default function Allentries({navigation}) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'space-between',flexDirection:'column'}}>
      <EntriesList></EntriesList>
      <View>
        <Bottom navigation={navigation}></Bottom>
      </View>
    </View>
  )
}