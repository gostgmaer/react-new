import React from 'react'
// function Greet(){
//     return <h1>Hllow Kishor</h1>
// }
// const Greet = ({name,heroName}) => {
const Greet = props => {
    const { name, heroName } = props
    console.log();
    return (
        <div>
            <h1>Hllow {name}</h1>
            <span>{heroName}</span>
            {/* <span>{children   }</span> */}
        </div>
    )


}
export default Greet;
