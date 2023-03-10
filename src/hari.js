import React from "react";
class Helo extends React.Component{
    render(){
        const {fullname,city,work}=this.props.info
    
    return(
        <div>
            <p>fullname:{fullname}</p>
            <p>city:{city}</p>
            <p>work:{work}</p>
        </div>

    )
}
}

class Child extends React.Component{
    state={
            person:[
                {fullname:"haritha",city:"bangalore",work:"training"},
                {fullname:"haritha",city:"bangalore",work:"training"},
                {fullname:"haritha",city:"bangalore",work:"training"},
            ]
        
    }
    render(){
        return(
            <div>
                {this.state.person.map(item=>(
                    <Helo info={item}/>

                ))}
            </div>
        )
    }
}
export default Child;