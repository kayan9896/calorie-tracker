import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import {add} from '../firebase/util.js'

export default function Add({navigation}) {
  const [meal,setmeal]=React.useState('')
  const [cal,setcal]=React.useState('')
  const [review,setreview]=React.useState(false)
  function reset(){
    setmeal('')
    setcal('')
  }
  function submit(){
    if(!(cal>0)||!meal){
      alert('invalid input')
    }else{
      
      add({meal:meal,cal:cal,review:review})
      navigation.goBack()
    }
  }
  return (
    <View style={{flex:1,alignItems:'center',padding:40}}>
        <View style={{flexDirection:'row'}}>
            <Text>Calories</Text>
            <TextInput placeholder="Calories" onChangeText={function(tx){setcal(tx)}}>{cal}</TextInput>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Meal</Text>
            <TextInput placeholder="Meal" onChangeText={function(tx){setmeal(tx)}}>{meal}</TextInput>
        </View>
        <View style={{flexDirection:'row'}}>
            <Pressable onPress={reset}><Text>reset</Text></Pressable>
            <Pressable onPress={submit}><Text>submit</Text></Pressable>
        </View>
    </View>
  )
}