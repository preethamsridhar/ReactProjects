import React from 'react'

export default function Person({person}) {
  return (
    <div>
       <h2>I am {person.name} of {person.age} years old. I have {person.skill} skill. </h2>
    </div>
  )
}
