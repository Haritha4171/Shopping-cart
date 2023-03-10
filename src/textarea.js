import { useState } from "react";

function Hello(){
    const [side,setSide]=useState(300)
    const [length,setLength]=useState(300)
 const count=(e)=>{
    let hii=e.target.value.length
    let hello=length
    let total=hello-hii
    setSide(total)
    if(total <=1){
        document.getElementById("haritha").style.color="red"        
    }
    else{
         document.getElementById("haritha").style.color="blue"         
    }
}
    // const Side=(e)=>{
    //     let Side=e.target.value.length;
    //    const hii= side++
    //     console.log(Side);
    //     Haritha()
    // }
    // function Haritha(){
    //     // for(let Side=0;Side<500;Side++){
    //     if(Side.length<0){
    //         alert("please enter something")
    //     }
    //     else if(Side>500){
    //         alert("enough the content")
    //     }
    //     else{
    //         Side=""
    //     }
       
    // }
    
    return(
        <div>
            <textarea rows="20" cols="50" onChange={count} required></textarea>
            <span id="haritha">{side}</span>
        </div>
    )
    }
export default Hello;