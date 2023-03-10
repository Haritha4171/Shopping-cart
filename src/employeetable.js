import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EMPTable(){
    const [data,setData]=useState("")
    useEffect(()=>{
        fetch("http://localhost:3006/employee")
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            setData(resp)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])
    const Delete=(id)=>{
        fetch("http://localhost:3006/employee/"+id,{
            method:"DELETE"
        })
        .then(()=>{
            alert("Deleted Succesfully")
            window.location.reload()
        })
    }
    return(
        <div>
            <div className="card">
                <div className="card-title">
                    <h3>Employee Mangement System</h3>
                </div>
                <div className="card-body">
                    <Link to="/EmpForm" className="btn btn-success">Add New(+)</Link>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                            data.map(items=>(
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.email}</td>
                                    <td>{items.phone}</td>
                                    <td>
                                        <a className="btn btn-success">Details</a>
                                        <a className="btn btn-primary">Edit</a>
                                        <a className="btn btn-danger" onClick={()=>{Delete(items.id)}}>Delete</a>
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default EMPTable;