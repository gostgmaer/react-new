import React from 'react'

function person({person}) {
  return (
    <div>
       <span>I am <strong>{person.first_name} {person.last_name}</strong>, My email is<strong> {person.email}</strong> and this is my<strong> {person.ip_address}</strong> ip Address</span>
    </div>
  )
}

export default person