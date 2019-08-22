const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost:27017/users-service`, {useNewUrlParser: true})

const db = mongoose.connection

module.exports = mongoose
