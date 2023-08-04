import { View, Text } from 'react-native'
import React from 'react'
import Bottom from '../components/Bottom'
import EntriesList from '../components/EntriesList'
import helper from '../components/helper'

export default function Overlimit({navigation}) {
  return (
    <View style={{flex:1}}>
    <View style={helper.listcontainer}>
      <EntriesList lim={500}></EntriesList>
    </View>
        <Bottom navigation={navigation}></Bottom>
    </View>
  )
}