import {db} from './setup.js';
import { collection, addDoc,deleteDoc,doc } from "firebase/firestore";

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
export {add,remove};