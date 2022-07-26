import React from 'react'
import './myStyle.css'

function styleSheet(props) {
    let className = props.primary?'primary':''
  return (
    <div className={`${className} fontss`} >styleSheet</div>
  )
}

export default styleSheet