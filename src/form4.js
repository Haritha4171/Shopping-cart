
import React from "react";
import "./form4.css"
class App extends React.Component{
    constructor(){
        super()
        this.state={
         email:"",
         password:""
        }
    }
        handleEmail=(e)=>{
            this.setState({email:e.target.value})
        }
        handlePassword=(e)=>{
            this.setState({password:e.target.value})
        }
    
         condition=()=>{
         if(this.state.password.length<6){
            alert("atleast more than 6 characters")
         }
         else{
            alert("signup successfully")
            localStorage.setItem("email",this.state.email)
            localStorage.setItem("password",this.state.password)
            
         }
        }
        localStorage=()=>{
            const email=localStorage.getItem("email")
            // console.log(email)
            const password=localStorage.getItem("password")
            // console.log(password)
         if(this.state.email===email && this.state.password===password){
            alert("sucessfully submitted")
            window.location.href="https://th.bing.com/th/id/R.ae3d2f4880eaca12be7c84e2d2c56041?rik=KeMl0VTdSYUt2g&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f1%2f9%2f355093.jpg&ehk=oGlwjQgO%2fFGGKmJsbxLKvu%2bk2XY18CIw6bAAeo6QVPw%3d&risl=&pid=ImgRaw&r=0"
         }
            else{
                alert("check ur credientails")
            }   
            
        }
    render(){
        return(
            <div>
                <center>
                    <h1>LOGIN</h1>
                    <br/><br/>
         <label>Email:</label>&ensp;&ensp;
         <input type="email" value={this.state.email} required onChange={this.handleEmail}></input>
         <br/><br/>
         <label>Password:</label>
         <input type="password" value={this.state.password} required onChange={this.handlePassword}></input>
         <br/><br/>
         <button onClick={this.condition}>SIGNUP</button>&ensp;&ensp;
         <button onClick={this.localStorage}>Login</button>
         <br/><br/><br/>
         </center>
            </div>
        )
    }
}
export default App;