const express = require('express')
const bodyParser = require('body-parser')

//start connection
require('./mongoose')

//controllers
const ProductController = require('./products/ProductController')
const OrderController = require('./orders/OrderController')

const app =  express()
app.use(bodyParser.json())

//products
app.get('/products', ProductController.index)
app.post('/product', ProductController.store)

//orders
app.get('/orders', OrderController.index)
app.get('/order/:_id', OrderController.show)
app.post('/order', OrderController.store)

app.listen("5000", ()=> {
    console.log("Running on Port 5000")
})