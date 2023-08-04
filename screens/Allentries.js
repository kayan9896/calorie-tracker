import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Bottom from '../components/Bottom'
import EntriesList from '../components/EntriesList'
import helper from '../components/helper'

export default function Allentries({navigation}) {
  return (
    <View style={{flex:1}}>
    <View style={helper.listcontainer}>
      <EntriesList></EntriesList>
    </View>
    <Bottom navigation={navigation}></Bottom>
  </View>
  )
}