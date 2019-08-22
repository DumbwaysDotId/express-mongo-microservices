const mongoose = require('../mongoose')

var Schema = mongoose.Schema

const ProductSchema = new Schema({
    name:  String,
    price: Number,
    description: String,
    tags: Array    
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product