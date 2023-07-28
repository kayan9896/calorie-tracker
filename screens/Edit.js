import { View, Text, Pressable, Alert } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons ,MaterialIcons} from '@expo/vector-icons';
import {remove,update} from '../firebase/util.js'
import { deleteDoc } from 'firebase/firestore';
import helper, { colour } from '../components/helper.js';

export default function Edit({route,navigation}) {
  const [reviewed,setReviewed] = React.useState(route.params.review)
  return (
    <View style={helper.editcontainer}>
      {(!reviewed&&route.params.cal>500)?alert('please review this entry'):null}
      <Text style={{color:colour.white}}>Calorires: {route.params.cal}</Text>
      <Text style={{color:colour.white}}>Description: {route.params.meal}</Text>
      <View style={helper.editpressablerow}>
        <Pressable style={({ pressed }) => {
          return [helper.itemcontainer,pressed && helper.ripple];
        }}
        onPress={()=>{
          Alert.alert(
            'Alert',
            'Delete?',
            [{text:'Yes',onPress:()=>{remove(route.params.id),navigation.goBack()}},
            {text:'No' }]
          )
          }}>
          <MaterialCommunityIcons name="delete" size={24} color="white" />
        
        </Pressable>
        {(!reviewed&&route.params.cal>500)?<Pressable style={({ pressed }) => {
          return [helper.itemcontainer,pressed && helper.ripple];
        }}
        onPress={function(){
          setReviewed(true)
          update(route.params.id,{...route.params,review:true})
          navigation.goBack()
          }}>
          <MaterialIcons name="check" size={24} color="white" />
        </Pressable>:null}
      </View>
    </View>
  )
}