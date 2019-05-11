import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 40,
            skill: 'Angular'
        },  
        {
            id: 3,
            name: 'Diana',
            age: 25,
            skill: 'Vue'
        }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    const personList = persons.map((person)=><Person key={person.id} person={person}></Person>)
    return (
        <div>
            {/* {personList} */}
            {nameList}
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
        </div>
    )
}

export default NameList
