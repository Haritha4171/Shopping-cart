import React from "react";
class Sai extends React.Component{
    constructor(){
        super();
        this.input=React.createRef()
        this.input1=React.createRef()
        this.input2=React.createRef()
        this.input3=React.createRef()
        this.input4=React.createRef()
        this.state={
            list:[]
        }
    }
    addData=(e)=>{
        const Items={
            value:this.input.current.value,
            value1:this.input1.current.value,
            value2:this.input2.current.value,
            value3:this.input3.current.value,
            value4:this.input4.current.value
        }
    if(localStorage.getItem('list')===null){
        const list=[]
        list.push(Items)
        localStorage.setItem('list',JSON.stringify(list))
    }
    else{
        const list=JSON.parse(localStorage.getItem('list'))
        list.push(Items)
        localStorage.setItem('list',JSON.stringify(list))
    }
        this.setState({
            list:JSON.parse(localStorage.getItem('list'))
        })        
    }

  delete=()=>{
  const value=JSON.parse(localStorage.getItem("list"))
  value.splice(0,1)
  this.setState({list:value})
  localStorage.setItem("list",JSON.stringify(value))
    }
    // edit=(e)=>{
    //     const  value=JSON.parse(localStorage.getItem("list"))
         
                                 
    //     }
    componentDidMount(){
        const list=window.localStorage.getItem("list")
        const value=JSON.parse(list)
        if(list==null){
            return false
        }
        else{
            this.setState({
                list:value
            })
        }
    }
        render(){
        return(
            <div>
                <center>
                <form id="id5">
                <label>Name:</label>
                <input type="text" placeholder="enter Data" ref={this.input} required/><br/><br/>
                <lable>city:</lable>
                <input type="text" placeholder="enter data" id="id" ref={this.input1} required></input><br/><br/>
                <lable>Phonenumber:</lable>
                <input type="text" placeholder="enter data" id="id1" ref={this.input2} required></input><br/><br/>
                <lable>email:</lable>
                <input type="email" placeholder="enter email" id="id2" ref={this.input3} required></input><br/><br/>
                <lable>Salary:</lable>
                <input type="text" placeholder="enter data" id="id3" ref={this.input4} required></input><br/><br/>
                <button onClick={this.addData} id="add">Add</button><br/><br/><br/>
                </form>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>City</td>
                        <td>Phone No</td>
                        <td>Email</td>
                        <td>Salary</td>
                        <td>Update</td>
                    </tr>
                </thead>
                {this.state.list.map((items)=>{                     
                    return(
                        <div>                             
                            <tbody>
                                    <tr>
                                        <td>{items.value}</td>
                                        <td>{items.value1}</td>
                                        <td>{items.value2}</td>
                                        <td>{items.value3}</td>
                                        <td>{items.value4}</td>
                                        <td><button onClick={this.delete}>X</button>&nbsp;
                                        <button onClick={this.edit}>edit</button></td>
                                    </tr>
                            </tbody>                           
                        </div>
                    )
                })}
                </center>
            </div>
        )
    }
}
export default Sai;