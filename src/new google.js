import axios from "axios";
import { useEffect, useState } from "react";


function App(){
  const [option,setOptions]=useState([])
  const [from,setFrom]=useState('en')
  const [to,setTo]=useState("en")
  const [input,setInput]=useState('')
  const [output,setOutput]=useState('')
 const changeFrom=(e)=>{
    setFrom(e.target.value)
  }
 const changeTo=(e)=>{
    setTo(e.target.value)
  }
useEffect(()=>{
  axios.get("https://libretranslate.com/languages",{
    headers: { "Content-Type": "application/json" }
  })
  .then((res)=>{
    console.log(res.data)
    setOptions(res.data)
  })
},[])

const Translate=(event)=>{
  event.preventDefault();
  const params=new URLSearchParams()
  params.append('q',input);
  params.append('source',from)
  params.append("target",to)
  params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
  axios.post("https://libretranslate.com/translate",params,{
    headers: { 
      "accept":"application/json",
       "Content-Type": 'application/x-www-form-urlencoded'
     }
  })
  .then((res)=>{
    console.log(res.data+"****************************************")
    setOutput(res.data.translatedText)
  })
}
const inputChange=(e)=>{
  setInput(e.target.value)
}


  return(
    <div>
      <div>
        <span>From({from}):</span>
        <select onChange={changeFrom}>
          {option.map((opt)=>(
             <option key={opt.code} value={opt.code}>{opt.name}</option>
          ))}
        
        </select>
        <span>To({to}):</span>
        <select onChange={changeTo}>
        {option.map((opt)=>(
             <option  key={opt.code} value={opt.code}>{opt.name}</option>
          ))}
        </select>
      </div>
      <div>
        <textarea cols="60" rows="8" onInput={inputChange}></textarea>
      </div>
      <div>
        <textarea cols="60" rows="8" value={output}></textarea>
      </div>
      <div>
        <button onClick={Translate}>Translate</button>
      </div>
    </div>
  )
}
export default App;