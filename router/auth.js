const router = require('express').Router()
const {siginup,siginin} = require('../controller/auth.controller')

//@desc siginup
//@route /api/v1/auth/siginup
router.post("/siginup",siginup)

//@desc siginin
//@route /api/v1/auth/siginin
router.post("/siginin",siginin)
module.exports=router