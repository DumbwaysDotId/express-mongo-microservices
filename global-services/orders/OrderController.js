const axios = require('axios')

const Order = require('./Order')

exports.index = (req, res)=> {
    Order.find({}).populate('productId').exec((err, docs)=>{
        res.send(docs)
    })    
}

exports.show = (req, res)=> {
    Order.findOne({_id: req.params._id}).lean().exec((err, doc)=>{
        if(err) res.send(err)
        else {            
            axios.get(`http://localhost:7000/user/${doc.userId.toString()}`).then((user)=>{
                doc.user = user.data
                res.send(doc)
            })            
                      
        }
    })    
}

exports.store = (req, res)=> {
    const order = new Order(req.body)
    order.save()

    res.send('success')
}