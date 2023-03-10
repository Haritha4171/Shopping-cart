import React from "react"
import "./dynamic.css"
class Hari extends React.Component{
    render(){
    const {img,para,title}=this.props.info
        return(
            <div>
                <img src={img}/> <br/>
               <p id="h">Heading:{para}</p><br/>
                <b>title:{title}</b>
            </div>
     
        )
    }
}
class Ram extends React.Component{
    state={
        people:[
            {img:"https://www.bing.com/th?id=OIP.QlPemi-BGIRmzOSUF3vLkwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",para:"HTML code ensures the proper formatting of text and images for your Internet browser. Without HTML, a browser would not know how to display text as elements or load images or other elements. HTML also provides a basic structure of the page, upon which Cascading Style Sheets are overlaid to change its appearance. One could think of HTML as the bones (structure) of a web page, and CSS as its skin (appearance).",title:"HTML5"},
            {img:"https://i.pinimg.com/474x/ca/81/a8/ca81a8be75400190ab304db1663528f5.jpg",para:"Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independent of the HTML that makes up each web page. It describes how a webpage should look: it prescribes colors, fonts, spacing, and much more. In short, you can make your website look however you want. CSS lets developers and designers define how it behaves, including how elements are positioned in the browser.",title:"CSS"},
            {img:"https://opencode.us/wp-content/uploads/2013/10/javascript_logo.png",para:"JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",title:"JAVASCRIPT"},
            {img:"https://www.bing.com/th?id=OIP.IxViyGJCI1Y_474QKLr3WQHaC2&w=285&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",para:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies",title:"REACT JS"}

        ]
    }
    render(){
        return(
            <div>
                {this.state.people.map(item=>(
                 <Hari info={item}/>
                ))}
            </div>
        )
    }
}
export default Ram;