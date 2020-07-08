const express = require('express')

const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'sqlpractice',
    user: 'sqlpracticeuser',
    password: 'sqlpractice'
})

const insert = {
    name: 'Dolores',
    age: 40,
    city: 'Westworld'
}

connection.query(
    `INSERT INTO persons(name,age,city) VALUES(
        '${insert.name}',
        ${insert.age},
        '${insert.city}'       
    )`,
    (err, results) => {
        if (err)
            console.error(err)
        else
            console.log('Inserted successfully')
        connection.close()
    }
)