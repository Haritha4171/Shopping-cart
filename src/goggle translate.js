// import { useEffect, useState,axios } from "react";
import { useState,useEffect,axios } from "react";
import "./goggle translate.css"
function App(){
 const [value,setValue]=useState([])
 useEffect(()=>{
    axios.get("https://libretranslate.com/languages",{
        headers:{
               "Content-Type": "application/json" 
        }
    })
    .then((res)=>{
        //console.log(res.data)
        setValue(res.data)
    })
 })
    return(
        <div>
            <h1>Google Translate</h1>
            <br/><br/>
            <span>From:</span>
            <select>
            {value.map((items)=>(
                    <option>{items.name}</option>
            ))}
            
            </select>
            <span>To:</span>
            <select>
            {value.map((items)=>(
                    <option>{items.name}</option>
            ))}
            
            </select>
            <br/><br/>
            <textarea rows="15" cols="55"></textarea>
            <br/><br/>
            <textarea rows="15" cols="55"></textarea>
        </div>
    )
}

export default App;