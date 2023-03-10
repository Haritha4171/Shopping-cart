import Child from "./child";
function Parent({value}){
    return(
        <div>
            <h3>Parent component</h3>
            <Child value={value}/>
        </div>
    )
}
export default Parent;