//models
const User = require('./User')


exports.index = (req, res)=>{
    User.find({}, (err, docs)=> {
        res.send(docs)
    })    
}

exports.store = (req, res)=> {
    const user = new User(req.body)
    user.save()

    res.send('success')
}

exports.show = (req, res)=> {
    User.findOne({_id: req.params._id}, (err, doc)=> {
        res.send(doc)
    })
}