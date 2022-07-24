import React from 'react'

    


function functionClick() {
    function clickHandler() {
        console.log("This is Working");
        
    }
  return (
    <div><button onClick={clickHandler} className="btn btn-primary">functionClick</button></div>
  )
}

export default functionClick