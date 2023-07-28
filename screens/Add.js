import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import {add} from '../firebase/util.js'
import helper, { colour } from '../components/helper.js'

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
    <View style={{flex:0.5,margin:40,padding:10,justifyContent:'space-evenly'}}>
        <View style={{flex:1,flexDirection:'row',padding:10,justifyContent:'flex-end'}}>
            <Text style={{flex:1,color:colour.purple}}>Calories</Text>
            <TextInput style={{backgroundColor:colour.white,flex:2}}placeholder="Calories" onChangeText={function(tx){setcal(tx)}}>{cal}</TextInput>
        </View>
        <View style={{flex:7,flexDirection:'row',padding:10}}>
            <Text style={{flex:1,color:colour.purple}}>Description</Text>
            <TextInput style={{backgroundColor:colour.white,flex:2}}placeholder="Description" onChangeText={function(tx){setmeal(tx)}}>{meal}</TextInput>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Pressable onPress={reset} style={function({pressed}){
              return [helper.prssinaddpage,pressed && helper.ripple]
            }}><Text style={{color:colour.white}}> reset </Text></Pressable>
            <Pressable onPress={submit} style={function({pressed}){
              return [helper.prssinaddpage,pressed && helper.ripple]
            }}><Text style={{color:colour.white}}>submit</Text></Pressable>
        </View>
    </View>
  )
}