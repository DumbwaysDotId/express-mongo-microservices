const express = require('express')
const bodyParser = require('body-parser')

//start connection
require('./mongoose')

//controllers
const UserController = require('./UserController')

const app =  express()
app.use(bodyParser.json())

//users
app.get('/users', UserController.index)
app.get('/user/:_id', UserController.show)
app.post('/user', UserController.store)

app.listen("7000", ()=> {
    console.log("User services - Running on Port 7000")
})