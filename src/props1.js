function myName(props){
    return(
        <div>
            <img src={props.img}/><br/>
            name:{props.name}<br/>
            city:{props.city}<br/>
            state:{props.state}
        </div>
    )
}

function myClass(){
    return(
        <div>
            <myName/>
            <props img="https://th.bing.com/th/id/OIP.FtxUktP5-fJOqJhvP2t9LQHaFj?pid=ImgDet&w=203&h=152&c=7"  name="Haritha" city="Tirupati" state="Andhrapradesh"></props>
        </div>
    )
}
export default myClass;