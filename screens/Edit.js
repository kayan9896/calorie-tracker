import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons ,MaterialIcons} from '@expo/vector-icons';
import {remove} from '../firebase/util.js'
import { deleteDoc } from 'firebase/firestore';

export default function Edit({route,navigation}) {
  const [reviewed,setReviewed] = React.useState(route.params.review)
  return (
    <View style={{alignItems:'center',padding:10,margin:40,backgroundColor:'teal'}}>
      {(!reviewed&&route.params.cal>500)?alert('please review this entry'):null}
      <Text>Calorires: {route.params.cal}</Text>
      <Text>Description: {route.params.meal}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%'}}>
        <Pressable onPress={()=>{
          remove(route.params.id)
          navigation.goBack()}}>
          <MaterialCommunityIcons name="delete" size={24} color="black" />
        </Pressable>
        {(!reviewed&&route.params.cal>500)?<Pressable onPress={function(){
          setReviewed(true)
          }}>
          <MaterialIcons name="check" size={24} color="black" />
        </Pressable>:null}
      </View>
    </View>
  )
}