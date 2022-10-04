const router = require('express').Router()
const {addToCart,cart} = require('../controller/user.Controller')
const middleware = require('../middleware/middleware')
//@desc adding to cart
//@route /api/v1/user/addtocart
router.post("/addtocart",addToCart)


//@desc show to cart
//@route /api/v1/user/cart
router.get("/cart",cart)


router.get("/",middleware.isAdmin,(req,res)=>{
    res.send('hello')
})
module.exports=router