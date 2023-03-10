
import { initializeApp } from "firebase/app";
import{createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,getAuth, onAuthStateChanged} from "firebase/auth"
import { useEffect,useState} from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDn9x2EGOoEwl-br0XVF9q7CphUeHZkG4E",
  authDomain: "new-auth-18606.firebaseapp.com",
  projectId: "new-auth-18606",
  storageBucket: "new-auth-18606.appspot.com",
  messagingSenderId: "231359738064",
  appId: "1:231359738064:web:14ad2c707769241f15eed5",
  measurementId: "G-P3ZEGREMMS"
};
const app = initializeApp(firebaseConfig);
let auth=getAuth()
export function createAccount(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}
export function Login(email,password){
return signInWithEmailAndPassword(auth,email,password)
}
export function loginOut(){
    return signOut(auth)
}
export function User(){
    const [current,setCurrent]=useState()
    useEffect(()=>{
        let x=onAuthStateChanged(auth,user=>setCurrent(user))
        return x
    
    },[])
    return current
}
