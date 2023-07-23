import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';

export default function Items({itm}) {
  const navigation = useNavigation()
  return (
    <View>
        <Pressable onPress={function(){navigation.navigate('Edit',{cal:itm.cal,meal:itm.meal})}} style={{flexDirection:'row',backgroundColor:'purple',padding:10,margin:10,justifyContent:'space-between'}}>
            <Text>{itm.meal}</Text>
            <View style={{flexDirection:'row',marginLeft:50}}>
            {itm.cal>500?<FontAwesome5 name="exclamation-triangle" size={16} color="yellow" paddingHorizontal={4}/>:null}
            <Text style={{backgroundColor:'white',paddingHorizontal:5}}>{itm.cal}</Text>
            </View>
        </Pressable>  
    </View>
  )
}