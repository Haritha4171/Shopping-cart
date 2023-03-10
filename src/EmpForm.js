import { useState } from "react"

function EmpForm(){
  const[id,setId]=useState("")
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")

  const changeId=(e)=>{
    setId(e.target.value)
  }
  const changeName=(e)=>{
    setName(e.target.value)
  }
  const changeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const changePhone=(e)=>{
    setPhone(e.target.value)
  }

  const handleSubmit=()=>{
    const data={id,name,email,phone}
    fetch("http://localhost:3006/employee",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then(()=>{
      alert("sucesufully saved")
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
    return(
        <div>
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label  className="form-label">ID:</label>
    <input type="text" value={id} onChange={changeId} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Name:</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={name} onChange={changeName}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email:</label>
    <input type="email" className="form-control" id="exampleInputPassword1" value={email} onChange={changeEmail}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Phone Number:</label>
    <input type="tel" className="form-control" id="exampleInputPassword1" value={phone} onChange={changePhone}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
export default EmpForm;