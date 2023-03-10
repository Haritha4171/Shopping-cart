import React from "react";
class Hari extends React.Component{
    userData;
    constructor(){
        super();
        this.state={
        fname:"",
        email:"",
        password:"",
        cpassword:"",
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
    handleCpassword=(e)=>{
        this.setState({cpassword:e.target.value})
    }
 handleSubmit=()=>{
    if(this.state.fname.length<6){
        alert("more than 6 characters")
    }
    else if(this.state.password !== this.state.cpassword){
        alert("password does not match")  
    }
    else{
        alert("succesfully submitted"+this.state.fname+this.state.email)
    }
 }
//  componentDidMount() {
//     this.userData = JSON.parse(localStorage.getItem('user'));
//     if (localStorage.getItem('user')) {
//         this.setState({
//             fname: this.userData.fname,
//             email: this.userData.email,
//             password: this.userData.password,
//             cpassword:this.userData.cpassword
//         })
//     } else {
//         this.setState({
//             fname: '',
//             email: '',
//             password: '',
//             cpassword:''
//         })
//     }
// } 
// componentWillUpdate(nextProps, nextState) {
//     localStorage.setItem('user', JSON.stringify(nextState));
// }  
// delete=()=>{
//     this.setState({
//         fname:false,
//         email:false,
//         password:false,
//         cpassword:false
//     })
// }
   

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Fullname:</label>
                    <input type="text" required value={this.state.fname} onChange={this.handleFname}></input>
                    <br/><br/>
                    <label>Email:</label>
                    <input type="email" required value={this.state.email} onChange={this.handleEmail}></input>
                    <br/><br/>
                    <label>Password:</label>
                    <input type="password" required value={this.state.password} onChange={this.handlePassword}></input>
                    <br/><br/>
                    <label>Confirm Password:</label>
                    <input type="password" required value={this.state.cpassword} onChange={this.handleCpassword}></input>
                    <br/><br/>
                    <input type="submit" value="submit"/>

                </form>
            </div>
        )
    }
}
export default Hari;

