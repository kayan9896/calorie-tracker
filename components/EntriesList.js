import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Items from './Items'

export default function EntriesList() {
    const [data, setData] = useState([
        {meal: 'Breakfast', cal: 100},
        {meal: 'Lunch', cal: 200},
        {meal: 'Dinner', cal: 300},
    ])
  return (
    <View style={{flex:1}}>
        <ScrollView>
            {data.map((itm)=>{return <Items key={itm.meal} itm={itm}/>})}
        </ScrollView>
    </View>
  )
}