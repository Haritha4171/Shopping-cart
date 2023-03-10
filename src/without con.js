 import { TwitterAuthProvider } from "firebase/auth"
import React from "react"
 class App extends React.Component{
    render(){
        const[img,name,city,mobile]=this.props.info
        return(
            <div>
             <img src={img}/><br/>
             name:{name}<br/>
             city:{city}<br/>
             mobile:{mobile}
            </div>
        )
    }
}
class App1 extends React.Component{
    state={
        student:[
            {img:"https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=245&h=180&c=7&r=0&o=5&pid=1.7",name:"haritha",city:"tirupati",mobile:8919528079}
        ]

    }
    render(){
        return(
            <div>
               {this.state.student.map(x=()=>{
                <App info={x}/>
               })}
               
                          </div>
        )
    }
}
export default App1;