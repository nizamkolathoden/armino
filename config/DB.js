const mongoose = require('mongoose')

const DB = ()=>{
    
    try {
        mongoose.connect(process.env.DB).then(()=>{
            console.log("connected DB");
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = DB;
