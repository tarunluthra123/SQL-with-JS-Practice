const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'sqlpractice',
    user: 'sqlpracticeuser',
    password: 'sqlpractice'
})

function getAllPersons() {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM persons`,
            (err, rows, cols) => {
                if (err)
                    reject(err)
                else
                    resolve(rows)
            }
        )
    })
}

function addNewPerson(name, age, city) {
    // console.log('In db.js - addNewPerson')
    return new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO persons (name,age,city) VALUES(?,?,?)',
            [name, age, city],
            (err, results) => {
                if (err)
                    reject(err)
                else
                    resolve(results)
            }
        )
    })
}

exports = module.exports = {
    getAllPersons,
    addNewPerson
}