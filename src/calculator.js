
import "./calculator.css"
import { useState } from "react";
function Calculator(){
     const[value,setValue]=useState("")
    const handleNum=(e)=>{
   setValue(value.concat(e.target.name))
    }
    const clear=()=>{
        setValue("");
    } 
    const Backspace=()=>{
        setValue(value.slice(0,-1))
    } 
    const Cals=()=>{
        try{
            setValue(eval(value))
        }
        catch(err){
            setValue("Error")
        }
    }                                                                                                                  
    return(
        <div>
            <center>
            <h1>calculator</h1>
            <input type="text" value={value}></input><br/><br/>
            <div>
            <button onClick={clear}>clear</button>&ensp;&ensp;&ensp;
            <button onClick={Backspace}>back</button><br/><br/>
            <button onClick={handleNum} name="+">+</button>&ensp;&ensp;&ensp;
            <button onClick={handleNum} name="-">-</button>&ensp;&ensp;&ensp;
            <button onClick={handleNum} name="*">*</button>&ensp;&ensp;&ensp;
            <button onClick={handleNum} name="/">/</button><br/><br/>
            <button onClick={handleNum} name="1">1</button>&ensp;&ensp;&ensp;
            <button onClick={handleNum} name="2">2</button>&ensp;&ensp;&ensp;
            <button onClick={handleNum} name="3">3</button><br/><br/>
            <button onClick={handleNum} name="4">4</button>&ensp;&ensp;&ensp;
            <button onClick={handleNum} name="5">5</button>&ensp;&ensp;&ensp;
            <button onClick={handleNum} name="6">6</button><br/><br/>
            <button onClick={handleNum} name="7">7</button>&ensp;&ensp;&ensp;
            <button onClick={handleNum} name="8">8</button>&ensp;&ensp;&ensp;
            <button onClick={handleNum} name="9">9</button><br/><br/>
            <button onClick={handleNum} name="0">0</button><br/><br/>
            <button onClick={Cals} className="hello">=</button>
            </div>
            </center>
        </div>
    )
}
export default Calculator;