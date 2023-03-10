//states--pass the informations with in the component
//declare in {}
//it is mutable we can update the data
//there are two types constructor and without constructor
import React from "react";
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={        //object name
            id:1,
            book:"React book",
            author:"Haritha"
        }
        // change=()=>{
        //     this.setState({
        //         id:2,
        //         book:"javascript",
        //         author:"vijay"
        //     })
        // }
    }
    render(){
        return(
            <div>
              <p>Id:{this.state.id}<br/>,
              book:{this.state.book}<br/>,
              author:{this.state.author}
              </p>
              <button onClick={this.change}>Update</button>
              <h3>count:</h3>
            </div>
        )
    }
}
export default App;