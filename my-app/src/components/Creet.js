import React from 'react'
// function Greet(){
//     return <h1>Hllow Kishor</h1>
// }
const Greet = props => {
    console.log(props);
    return (
        <div>
        <h1>Hllow {props.name}</h1>
        <span>{props.heroName}</span>
        <span>{props.children   }</span>
        </div>
    )


}
export default Greet;
