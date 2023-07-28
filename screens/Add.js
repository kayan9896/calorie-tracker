import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import {add} from '../firebase/util.js'
import { colour } from '../components/helper.js'

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
    <View style={{flex:0.3,alignItems:'center',margin:40,padding:20,justifyContent:'space-evenly',backgroundColor:colour.pink}}>
        <View style={{flexDirection:'row',alignItems:'flex-start'}}>
            <Text>Calories</Text>
            <View style={{width:40}}></View>
            <TextInput style={{backgroundColor:colour.white}}placeholder="Calories" onChangeText={function(tx){setcal(tx)}}>{cal}</TextInput>
        </View>
        <View style={{flex:5,flexDirection:'row',alignItems:'stretch'}}>
            <Text>Meal</Text>
            <TextInput style={{backgroundColor:'pink',textAlignVertical: 'top'}}placeholder="Meal" onChangeText={function(tx){setmeal(tx)}}>{meal}</TextInput>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Pressable onPress={reset} style={{padding:10, backgroundColor:'purple'}}><Text style={{color:'white'}}> reset </Text></Pressable>
            <Text style={{padding:10}}></Text>
            <Pressable onPress={submit} style={{padding:10, backgroundColor:'purple'}}><Text style={{color:'white'}}>submit</Text></Pressable>
        </View>
    </View>
  )
}