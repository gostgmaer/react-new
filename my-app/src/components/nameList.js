import React from 'react'
import Person from './person'


function nameList() {
    const persons = [{
        "id": 1,
        "first_name": "Alys",
        "last_name": "Jaan",
        "email": "ajaan0@comcast.net",
        "gender": "Female",
        "ip_address": "253.67.103.84"
    }, {
        "id": 2,
        "first_name": "Howard",
        "last_name": "Lemary",
        "email": "hlemary1@storify.com",
        "gender": "Genderqueer",
        "ip_address": "205.232.217.1"
    }, {
        "id": 3,
        "first_name": "Freddy",
        "last_name": "Fronks",
        "email": "ffronks2@sourceforge.net",
        "gender": "Female",
        "ip_address": "253.97.198.88"
    }, {
        "id": 4,
        "first_name": "Estevan",
        "last_name": "Spraggs",
        "email": "espraggs3@networksolutions.com",
        "gender": "Male",
        "ip_address": "97.102.248.16"
    }, {
        "id": 5,
        "first_name": "Heindrick",
        "last_name": "Dryden",
        "email": "hdryden4@pen.io",
        "gender": "Male",
        "ip_address": "159.98.79.103"
    }, {
        "id": 6,
        "first_name": "Maynard",
        "last_name": "Thorpe",
        "email": "mthorpe5@yellowbook.com",
        "gender": "Male",
        "ip_address": "180.248.138.84"
    }, {
        "id": 7,
        "first_name": "Hadlee",
        "last_name": "Broderick",
        "email": "hbroderick6@prweb.com",
        "gender": "Male",
        "ip_address": "214.101.121.106"
    }, {
        "id": 8,
        "first_name": "Caryl",
        "last_name": "Benkin",
        "email": "cbenkin7@miibeian.gov.cn",
        "gender": "Male",
        "ip_address": "177.241.153.152"
    }, {
        "id": 9,
        "first_name": "Dale",
        "last_name": "Sweetman",
        "email": "dsweetman8@alexa.com",
        "gender": "Male",
        "ip_address": "190.225.235.100"
    }, {
        "id": 10,
        "first_name": "Verne",
        "last_name": "Grazier",
        "email": "vgrazier9@china.com.cn",
        "gender": "Male",
        "ip_address": "234.133.104.6"
    }]
    const names =['bruce','clerk','diana','bruce']
    const PersonList = names.map((name,index) => (
    // <Person key={person.id} person= {person}/> 
    <h2 key={index}>{index}{name}</h2>
    ))
    return (
        <div>
            {/* <h2>{names[0]}</h2> */}
            {
                PersonList
            }

        </div>
    )
}

export default nameList