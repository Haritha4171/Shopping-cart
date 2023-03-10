import React, { useState } from 'react'
const App=()=>{
    const[search,setSearch]=useState("")
    const submitHandler=(e)=>{
        e.preventDefault();
        //console.log(search)
        fetch("https://api.edamam.com/api/recipes/v2")
    }
    return(
        <div>
            <center>
                <h4>Food Recipe App</h4>
                <form onSubmit={submitHandler}>
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                    <input type="submit" value="search"></input>
                </form>
            </center>
        </div>
    )
}  
export default App;  