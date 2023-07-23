import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
export default function Items({itm}) {
  navigation = useNavigation()
  return (
    <View style={{flex:1}}>
        <Pressable onPress={navigation.navigate('Edit')}>
            <Text>{itm.meal}</Text>
            <Text>{itm.cal}</Text>
        </Pressable>  
    </View>
  )
}