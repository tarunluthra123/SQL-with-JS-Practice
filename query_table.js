const express = require('express')

const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'sqlpractice',
    user: 'sqlpracticeuser',
    password: 'sqlpractice'
})

connection.query(
    `SELECT * FROM persons`,
    (err, rows, cols) => {
        if (err)
            console.error(err)
        else {
            console.log('Inserted successfully')
            console.log(rows)
            // console.log(cols)
        }
        connection.close()
    }
)