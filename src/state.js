import React from "react"
class State extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:"red",
            name:"haritha",
            age:22
        }

    }
    handleChange=()=>{
        this.setState({
            color:"blue",
            name:"vijay",
            age:25
        })
    }

    render(){
        return(
            <div>
           {this.state.color}<br/>
           {this.state.name}<br/>
           {this.state.age}<br/>
           <button onclick={this.handleChange}>Update</button>
            </div>
        )
    }
}

export default State;