const mongoose = require('./mongoose')

var Schema = mongoose.Schema

const UserSchema = new Schema({
    email:  String,
    password: String,
    name: String, 
})

const User = mongoose.model('User', UserSchema)

module.exports = User