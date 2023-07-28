import { View, Text,StyleSheet } from 'react-native'
import Plus from './Plus'
export const colour={
  purple:'#800080',
  pink:'#FFC0CB',
    white:'#FFFFFF',
    black:'#000000',
    yellow:'#FFFF00',
}
export default helper = StyleSheet.create({
    listcontainer:{flex:1,alignItems:'center',justifyContent:'space-between',flexDirection:'column'},
    editcontainer:{alignItems:'center',paddingTop:20,margin:40,backgroundColor:colour.purple},
    editpressablerow:{flexDirection:'row',alignContent:'center'},
    itemcontainer:{flexDirection:'row',backgroundColor:'purple',padding:10,margin:10,justifyContent:'space-between'},
    ripple:{ backgroundColor: colour.pink, opacity: 0.7},
    opt:({navigation})=>({
        headerRight:()=><Plus navigation={navigation}/>,
        headerBackVisible:false, 
        headerTintColor:colour.white, 
        headerStyle:{backgroundColor:colour.purple}
        }),
    calbar:{backgroundColor:colour.white,paddingHorizontal:5,color:colour.purple} ,
    bottomcontain:{flexDirection:'row',justifyContent:'center',padding:5,backgroundColor:colour.purple},
    prssinaddpage:{padding:10,margin:10, backgroundColor:'purple'}
})