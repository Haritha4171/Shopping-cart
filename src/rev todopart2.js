const Todolist=({helo,DeleteHandler})=>{
    return(
        <div>
            {helo.map((t,index)=><div>
                <h3>{t}</h3><button onClick={()=>DeleteHandler(index)}>Delete</button>
            </div>)}

        </div>
    )
}
export default Todolist; 
