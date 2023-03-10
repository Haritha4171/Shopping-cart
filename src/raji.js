import { useState } from "react";
import Parent from "./parent";
function Raji(){
    const [Val,setVal]=useState("hello good morning")
    return(
        <div>
            <h1>main document </h1>
            <Parent value={Val}/>
        </div>
        
    )
}
export default Raji;