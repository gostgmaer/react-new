import React from 'react'

function childComponet(props) {
  return (
    <div> <button onClick={()=>props.greethandler('Child')} >Greet Parent</button> </div>
  )
}

export default childComponet