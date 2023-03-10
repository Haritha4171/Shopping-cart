import "./todolist1.css"
import React from "react";
class App extends React.Component{
    constructor(){
        super()
        this.state={
           input:"",
           ulist:"",
           li:""
        }
        handleInput=(e)=>{
            ulist.appendChild(li)
        }
    }
    render(){
        return(
            <div>
                <center>
                <input type="text" required value={this.state.input}></input>
                <button onClick={this.handleInput}>Add</button>
                <ulist value={this.state.ulist}></ulist>
                </center>
            </div>
        )
    }
}
export default App;