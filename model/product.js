const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true['please Enter title']
    },
    price:{
        type:Number,
        required:true['please Enter Price']
    },
    productType:String

})

module.exports = mongoose.model('Product',productSchema)