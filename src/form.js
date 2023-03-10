import React,{ useState } from "react";


function Form(){

const [fname,setFname]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [cpassword,setCpassword]=useState("")

const handleFname=(j)=>{
setFname(j.target.value)

}


const handleEmail=(j)=>{
    setEmail(j.target.value)

    }
    
const handlePassword=(j)=>{
    setPassword(j.target.value)
    }
    
const handleCpassword=(j)=>{
    setCpassword(j.target.value)
    }
    const handleLoc=(j)=>{
        localStorage.setItem("fullname",fname)

        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
        localStorage.setItem("Cpassword",cpassword)
    }

    


    const handleSubmit=()=>{
        if(fname.length<6){
            alert("Enter name morethan six characters")
        }
        else if(password !== cpassword){
            alert("Password does not match")
        }
         else{
            alert("form successfully submitted")
         }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input type="text" value={fname} required  onChange={handleFname}/>
                <br/><br/>
                <label>Email:</label>
                <input type="emial" value={email} required onChange={handleEmail}/>
                <br/><br/>
                <label>Password:</label>
                <input type="password" value={password} required onChange={handlePassword}/>
                <br/><br/>
                <label>Confirm Password</label>
                <input type="password" value={cpassword} required onChange={handleCpassword} />
                <br/><br/>
                <input type="submit" onClick={handleLoc} />
            </form>

        </div>
    )
}
export default Form;