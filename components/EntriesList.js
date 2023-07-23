import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Items from './Items'

export default function EntriesList({lim=0}) {
    const [data, setData] = useState([
        {meal: 'Breakfast', cal: 100},
        {meal: 'Lunch', cal: 200},
        {meal: 'Dinner', cal: 300},
        {meal: 'Snacks', cal: 400},
        {meal: 'supper', cal: 500},
        {meal: 'feast', cal: 600},
        {meal: 'party', cal: 700},
        {meal: 'wedding', cal: 800},
        {meal: 'celebration', cal: 900},
        {meal: 'treat', cal: 1000},
        {meal: 'dessert', cal: 1100},

    ])
  return (
    <View style={{flex:1}}>
        <FlatList data={data.filter(i=>i.cal>lim)} renderItem={({item})=>{return <Items itm={item}  />}} showsVerticalScrollIndicator={false}/>
    </View>
  )
}