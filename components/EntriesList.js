import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Items from './Items'
import {db} from '../firebase/setup.js'
import { collection,onSnapshot } from 'firebase/firestore'

export default function EntriesList({lim=0}) {
    const [data, setData] = useState([])
    useEffect(()=>{
      const dt=onSnapshot(collection(db,"cal"),(snapshot)=>{
        if(!snapshot.empty){
          const puredt=snapshot.docs.map((doc)=>{return {...doc.data(),id:doc.id}})
          setData(puredt)
        }});
      return()=>{dt()}
      },[]
    )
  return (
    <View style={{flex:1}}>
        <FlatList data={data.filter(i=>i.cal>lim)} renderItem={({item})=>{return (lim==0||(lim!=0&&item.review===false))?<Items itm={item}/>:null}} showsVerticalScrollIndicator={false}/>
    </View>
  )
}