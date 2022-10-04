const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    
    quntity:{
     type:Number
    },
    productType:String,
    totalPrice:{
        type:Number,
        require:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
   

   

    

})
module.exports=mongoose.model('Cart',cartSchema)