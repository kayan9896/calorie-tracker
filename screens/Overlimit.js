import { View, Text } from 'react-native'
import React from 'react'
import Bottom from '../components/Bottom'

export default function Overlimit({navigation}) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'space-between',flexDirection:'column'}}>
      <Text>Overlimit</Text>
      <View>
        <Bottom navigation={navigation}></Bottom>
      </View>
    </View>
  )
}