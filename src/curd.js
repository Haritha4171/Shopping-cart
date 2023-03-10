import React from "react"
import "./curd.css"
class App extends React.Component{
    constructor(){
        super()
        this.state={
            fname:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }
    handleFname=(e)=>{
        this.setState({fname:e.target.value})
    }
    handleEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    handlePassword=(e)=>{
        this.setState({password:e.target.value})
    }
    handleConfirm=(e)=>{
        this.setState({confirmPassword:e.target.value})
    }
    handleError=()=>{
        if(this.state.fname.length<6){
            alert("atleast enter more than 6 characters")
        }
        else if(this.state.password !== this.state.confirmPassword){
           alert("password does not match")
        }
        else{
            alert("succesfully submitted")
        }
       }
       Storage=(e)=>{
        localStorage.setItem(e.target.value)
       }

    render(){
        return(
            <div>
                <form>
                <label>Name:</label>
                <input type="text" value={this.state.fname} required onChange={this.handleFname}></input><br/><br/>
                <label>Email:</label>
                <input type="email" value={this.state.email} required onChange={this.handleEmail}></input><br/><br/>
                <label>Password:</label>
                <input type="password" value={this.state.password} required onChange={this.handlePassword}></input><br/><br/>
                <label>Confirm Password:</label>
                <input type="password" value={this.state.confirmPassword} required onChange={this.handleConfirm}></input><br/><br/>
                <button onClick={this.handleError} onChange={this.Storage}>Login</button>
                </form>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>confirm password</th>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default App;