import React, { useState } from "react";
import TodoList from "./todolist.js"
import "./index.css"
const App=()=>{
    const[task,setTask]=useState("");
    const[todos,setTodos]=useState([]);
    const changeHandler=e=>{
        setTask(e.target.value)
    }
    const submitHandler=e=>{
        e.preventDefault();
        const newTodos=[...todos,task];
        setTodos(newTodos);
        setTask("");
    }
    const deleteHandler=(indexValue)=>{
        const newTodos=todos.filter((todo,index)=>index!==indexValue)
        setTodos(newTodos)
    }
    function storageLoc(e){
        localStorage(e.target.newTodos)
    }
    return(
        <div>
            <h5>TODO LIST</h5>
            <form onSubmit={submitHandler}>
            <input size="40" type="text" name="task" value={task} onChange={changeHandler}></input>&nbsp;&nbsp;
            <input type="submit" value="ADD" name="add"  onChange={storageLoc}></input>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
        </div>
    )
} 
export default App;