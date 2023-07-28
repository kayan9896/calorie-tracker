import {db} from './setup.js';
import { collection, addDoc,deleteDoc,doc,setDoc,updateDoc } from "firebase/firestore";

async function add(item){
    try{
        const docRef=await addDoc(collection(db,"cal"),item)
    }
    catch(e){
        console.log(e)
    }
}
async function remove(id){
    try{
        const docRef=await deleteDoc(doc(db,"cal",id))
    }
    catch(e){
        console.log(e)
    }
}
async function update(id,item){
    try{
        const docRef=await updateDoc(doc(db,"cal",id),item)
    
    }
    catch(e){
        console.log(e)
    }
}
export {add,remove,update};