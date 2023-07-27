import {db} from './setup.js';
import { collection, addDoc } from "firebase/firestore";

async function add(item){
    try{
        const docRef=await addDoc(collection(db,"cal"),item)
    }
    catch(e){
        console.log(e)
    }
}
export {add};