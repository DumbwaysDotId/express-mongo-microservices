//models
const Product = require('./Product')


exports.index = (req, res)=>{
    Product.find({}, (err, docs)=> {
        res.send(docs)
    })    
}

exports.store = (req, res)=> {
    const product = new Product(req.body)
    product.save()

    res.send('success')
}