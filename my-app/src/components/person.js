import React from 'react'

function person({person}) {
  return (
    <div>
       <h2>I am {person.first_name} {person.last_name}, My email is {person.email} and this is my {person.ip_address} ip Address</h2>
    </div>
  )
}

export default person