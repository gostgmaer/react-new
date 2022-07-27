import React from 'react'
const heading = {
    fontSize: '72px',
    color: 'yellow',
    
}

function inline() {
    return (
        <div> <h1 className='error' >Error</h1>
        <div style={heading} >inline</div></div>
       
    )
}

export default inline