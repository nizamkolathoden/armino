const router = require('express').Router()
const admin = require('../controller/admin.Controller')
//@desc add Products
//@route /admin/addproduct
router.post("/addproduct",admin.addProducts)

router.get("/",(req,res)=>{
    res.json("hello")
})

module.exports = router