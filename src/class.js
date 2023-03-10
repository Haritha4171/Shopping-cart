import React from "react";
import App1 from "./class1";
class App extends React.Component{
    render(){
        return(
            <div>
                <label>Full Name:</label>
                <input type="text" placeholder="enter ur name"></input>
                <App1/>
            </div>
        )
    }
}
export default App;