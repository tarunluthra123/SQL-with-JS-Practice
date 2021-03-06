const express = require('express')
const app = express()
// const db = require('./db')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use('/pages', require(__dirname + '/routes/pages').route)
app.use('/api', require(__dirname + '/routes/api').route)
app.use('/', express.static(path.join(__dirname, 'public_static')))

app.listen(4444, () => {
    console.log('Server started on localhost:4444')
})