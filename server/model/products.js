const mongoose = require('mongoose')
const productModel = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
   
})

module.exports = mongoose.model('products',productModel)