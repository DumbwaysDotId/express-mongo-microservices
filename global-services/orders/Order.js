const mongoose = require('../mongoose')

var Schema = mongoose.Schema

const OrderSchema = new Schema({
    userId: mongoose.Types.ObjectId,
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    qty: Number,
    price: Number
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order