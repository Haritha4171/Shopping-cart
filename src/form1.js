import React, { useState } from "react"
const Form=()=>{
    const [fname,setFname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[cpassword,setCpassword]=useState("")

    const handleFname=(e)=>{
        setFname(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleCpassword=(e)=>{
        setCpassword(e.target.value)
    }

    const handleLoc=()=>{
        localStorage.setItem("fullname",fname);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        localStorage.setItem("cpassword",cpassword)
    }
    const handleSubmit=(event)=>{
        if(fname.length<6){
            alert("morethan 6 characters")
        }
        else if(password !== cpassword){
            alert("password does not match")
        }
        else{
            alert("successfully submitted")
            change(event)
            
        }
        
    }
     function change(event){
        event.preventDefault()
       window.location.href="http://in.youtube.com/"
        }
return(
    <div>
        <form onSubmit={handleSubmit}>
        <label>Fullname:</label>
        <input type="text" required value={fname} onChange={handleFname}></input>
        <br/><br/>
        <label>Email:</label>
        <input type="email" required value={email} onChange={handleEmail}></input>
        <br/><br/>
        <label>password:</label>
        <input type="password" required value={password} onChange={handlePassword}></input>
        <br/><br/>
        <label>Confirm Password:</label>
        <input type="password" required value={cpassword} onChange={handleCpassword}></input>
        <br/><br/>
        <input type="submit" value="SAVE" onClick={handleLoc}></input>
        </form>
    </div>
)
}
export default Form;