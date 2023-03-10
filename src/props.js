function App(props){
    const{fname,lname, age,city}=props
    return(
        <div>
            <p>
                Firstname:{fname}<br/>
                Lastname:{lname}<br/>
                age:{age}<br/>
                city:{city}
            </p>
        </div>
    )
}

function App1(){
    return(
        <div>
            <h3>Child component</h3>
            <App fname="haritha" iname="c" age="22" city="bangalore"/>
            <App fname="vijay" iname="c" age="25" city="tirupati"/>
        </div>
    )
}
export default App1;



// import  PropTypes  from "prop-types";
// import React from "react";
// class Props extends React.Component(){
//     render(){
//         const{fname,lname}=this.props;
//         return(
//             <div>
//                 <p>
//                     Firstname:{fname}<br/>
//                     lastname:{lname}
//                 </p>
//             </div>
//         )
//     }
// }

// Props.propTypes={
//     fname:PropTypes.string,
//     lname:PropTypes.string
// }
// Props.defaultprops={
//     fname:"hari",
//     lname:"c"
// }
// export default Props;