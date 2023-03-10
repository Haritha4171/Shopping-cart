import { useEffect } from "react"
const context=React.createContext()

function App(){
    const[loading,setLoading]=useState("Hello Goodmorning")
    return(
        <div>
            <context.Provider value={loading}>
            <h3>Main component{}</h3>
            <App1/>
            </context.Provider>
        </div>
    )
}
function App1(){
    return(
        <div>
            <h3>Parent component</h3>
            <App2/>
        </div>
    )
}
function App2(){
    return(
        <div>
            <h3>child component</h3>
            <App3/>
        </div>
    )
}
function App3(){
    return(
        <div>
            <h3>nth component</h3>
        </div>
    )
}
export default App;