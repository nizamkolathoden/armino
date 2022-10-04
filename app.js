const express = require('express')
const app = express()
const cookie = require('cookie-parser')
app.use(express.json())
app.use(cookie())
const PORT=process.env.PORT||4000

const {isLoggedIn,isAdmin} = require('./middleware/middleware')

require('dotenv').config()
//conect DB
require("./config/DB")()
//route
app.use('/api/v1/admin',isLoggedIn,isAdmin,require('./router/admin'))
app.use('/api/v1/user',isLoggedIn,require('./router/user'))
app.use('/api/v1/auth',require('./router/auth'))

app.listen(PORT,()=>console.log(`Server Running on Port ${PORT}`))