import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';
import helper, { colour } from './helper';

export default function Items({itm}) {
  const navigation = useNavigation()
  return (
    <View>
        <Pressable onPress={function(){navigation.navigate('Edit',{cal:itm.cal,meal:itm.meal,review:itm.review,id:itm.id})}} 
        android_ripple={{ color:colour.pink }}
        style={({ pressed }) => {
          return [helper.itemcontainer,pressed && helper.ripple];
        }}
        >
            <Text style={{color:colour.white}}>{itm.meal}</Text>
            <View style={{flexDirection:'row',marginLeft:50}}>
              {itm.cal>500?<FontAwesome5 name="exclamation-triangle" size={16} color="yellow" paddingHorizontal={4} />:null}
              <Text style={helper.calbar}>{itm.cal}</Text>
            </View>
        </Pressable>  
    </View>
  )
}