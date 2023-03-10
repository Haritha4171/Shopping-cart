//composition method-with in one component more than one component combining.it converets into new component
//composition is both applicable for functions and class based components
//class based components is completely based on the oops concept.

import { array } from "prop-types"

//functional components is completely based on the hooks concept.
export function Class(){
    return(
        <div>
            <input type="text"></input>
            <class1/>
        </div>
    )
}
export function Class1(){
    return(
        <div>
            <input type="submit" value="login"></input>
        </div>
    )
}

//inheritance only applicable for class based components
//inheritance means one class drive from the another class
//inheritance only acess the parnent elements.using super keyword.
//nested loops 
//nested array
//Api
//objects
//let y=[[1,2],[3,4],[5,6]]

let x=[[1,2],[3,4],[5,6]]
for(let i=0;i<x.length;i++){
    //console.log(x[i])
    for(let j=0;j<x[i].length;j++){
        console.log(x[i][j])
    }

}
