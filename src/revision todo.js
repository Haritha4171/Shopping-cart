import { useState } from "react";
import Todolist from "./rev todopart2";

const App=()=>{
    const[task,setTask]=useState("");
    const[todos,setTodos]=useState([])
    const changeHandler=(e)=>{
        setTask(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
       const haritha=[...todos,task];
       setTodos(haritha);
       setTask("");
    }
    const DeleteHandler=(indexValue)=>{
        const newTodos=todos.filter((todo,index)=>index!==indexValue)
        setTodos(newTodos);

    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={task} onChange={changeHandler}></input> 
                <input type="submit" value="Add"></input>
            </form>
            <Todolist helo={todos}/>
        </div>
    )
}
export default App;