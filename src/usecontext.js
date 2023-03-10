import React, { useContext } from "react"
let Context=React.createContext()
function App(){
    return(
        <div>
            <Context.Provider value={"hello Good morning"}>
       <h3>Haritha</h3>
       <App1/>
       </Context.Provider>
        </div>
    )
}
function App1(){
    return(
        <div>
            <h3>Haritha</h3>
            <App2/>
        </div>
    )
}
function App2(){
    return(
        <div>
          <h3>Haritha</h3>
          <App3/>  
        </div>
    )
}
function App3(){
    return(
        <div>
           <h3>Haritha</h3> 
           <App4/>
        </div>
    )
}
function App4(){
    return(
        <div>
            <h3>Haritha</h3>
            <App5/>
        </div>
    )
}
function App5(){
    value=useContext({Context})
    return(
        <div>
            <h3>Haritha {value}</h3>


            
        </div>
    )
}

export default App;