import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
export default function Items({itm}) {
  const navigation = useNavigation()
  return (
    <View>
        <Pressable onPress={function(){navigation.navigate('Edit')}} style={{flexDirection:'row',backgroundColor:'purple',padding:10,margin:10,justifyContent:'space-between'}}>
            <Text>{itm.meal}</Text>
            <Text style={{marginLeft:50,backgroundColor:'white',paddingHorizontal:5}}>{itm.cal}</Text>
        </Pressable>  
    </View>
  )
}