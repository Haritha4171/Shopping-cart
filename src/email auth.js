import { useRef, useState } from "react";
import{createAccount,Login,loginOut,User} from "./email-auth.js"

function App(){
    const [loading,setLoading]=useState(false)
    let emailRef=useRef()
    let passwordRef=useRef()
    let currentUser=User()  
    async function handleSignUp(){
        setLoading(true)
        await createAccount(emailRef.current.value,passwordRef.current.value)
    }
    async function handleLogin(){
        setLoading(true)
        try{
            await Login(emailRef.current.value,passwordRef.current.value)
        }
        catch{
            alert("please create first")
        }
    }
    async function handleLoginOut(){
        setLoading(true)
        await loginOut()

    }
    return(
        <center>
              <h3>Current User:{currentUser?.email}</h3>
            <div>
              
                <label>Email:</label>
                <input type="email" ref={emailRef}></input>
                <br></br><br></br>
                <label>Password:</label>
                <input type="password" ref={passwordRef}></input>
                <br></br><br></br>
                <button disabled={loading || currentUser}onClick={handleSignUp}>Signin</button>
                <button disabled={loading || currentUser} onClick={handleLogin}>Login</button>
                <button disabled={loading ||! currentUser} onClick={handleLoginOut}>logout</button>
            </div>
        </center>
    )
}
export default App;