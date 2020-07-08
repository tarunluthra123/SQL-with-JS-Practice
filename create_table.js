const express = require('express')

const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'sqlpractice',
    user: 'sqlpracticeuser',
    password: 'sqlpractice'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS persons(
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(30)        
    )`,
    (err, results) => {
        if (err)
            console.error(err)
        else
            console.log('Table created')
        connection.close()
    }
)