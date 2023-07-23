import { View, Text } from 'react-native'
import React from 'react'
import Bottom from '../components/Bottom'
import EntriesList from '../components/EntriesList'

export default function Overlimit({navigation}) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'space-between',flexDirection:'column'}}>
      <EntriesList lim={500}></EntriesList>
      <View>
        <Bottom navigation={navigation}></Bottom>
      </View>
    </View>
  )
}