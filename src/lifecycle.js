import React from "react";
class Life extends React.Component{
    constructor(){
        super();
        this.state={
        msg:"welcome",
        value:"All"
        }
    }
    componentWillMount(){
        alert("we will learning life cycle")
    }
    render(){
        return(
            <div>
                <p>{this.state.msg} {this.state.value}</p>
                <p id="para"></p>
                <button onClick={this.delete}>Delete</button>
            </div>
        )              
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                msg:"Thank u"
            })
        },2000)
    }

componentWillUpdate(){
    alert("we have to update the state values?")
}
componentDidUpdate(){
    document.getElementById("para").innerHTML="updated state is"+this.state.msg
}
delete=()=>{
    this.setState({
        msg:false,
        value:false
    })
}

}



export default Life;