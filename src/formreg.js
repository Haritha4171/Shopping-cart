import React from "react";
class App extends React.Component{
    state={
        username:"",
        email:"",
        password:"",
        cpassword:"",
        name:"",
        pass:""
       
       }
 username=(e)=>{
    this.setState({username:e.target.value})
}
email=(e)=>{
    this.setState({email:e.target.value})
}
password=(e)=>{
    this.setState({password:e.target.value})
}
cpassword=(e)=>{
    this.setState({cpassword:e.target.value})
}

submit=(event)=>{
    event.preventDefault()
    const name=/^[a-zA-Z0-9]{6,12}$/
    //const pass=/[a-z6+A-Z+0-9]/
    if(name.test(this.state.username)){
        alert("this username is not valid")
        //console.log("iam password")
    }
    else if(name.test(this.state.password)){
        alert("password is not valid")
    }
    else if(this.state.password!==this.state.cpassword){
        alert("password does not match")
    }
    else{
        alert("succesfully")
      localStorage.setItem("name:",this.state.username)
      localStorage.setItem("email:",this.state.email)
      localStorage.setItem("password:",this.state.password)
    }

}
    render(){
        return(
            <div>
                
                <form>
                <label>Username:</label>
                <input type="text" value={this.state.username} onChange={this.username} id="name"></input><br/>
                <label>Email:</label>
                <input type="email" value={this.state.email} onChange={this.email}></input><br/>
                <label>Password:</label>
                <input type="password" value={this.state.password} onChange={this.password} id="pass"></input><br/>
                <label>Confirm password:</label>
                <input type="password" value={this.state.cpassword} onChange={this.cpassword}></input><br/>
                <input type="submit" value="sign In" onClick={this.submit}></input>
                </form>
                
            </div>
        )
    }
}
export default App;