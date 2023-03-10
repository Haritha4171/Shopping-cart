import React from "react"
class App extends React.Component{
    constructor(){
        super()
        this.state={
            name:"vijay",
            value:"haritha"
        }
    }
    render(){
        return(
            <div>
                <p>{this.state.name},{this.state.value}</p>
            </div>
        )
    }
}
export default App;