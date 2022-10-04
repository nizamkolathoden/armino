const jwt = require('jsonwebtoken')

const User = require('../model/user')
module.exports = {
isLoggedIn: async(req, res, next) => {

    try {
        
        const token = req.cookies?.token||req.headers['authorization']?.replace('Bearer ', "");
        
        if(!token)
            return res.status(401).json({error:'Login first'})

        const decoded = jwt.verify(token,process.env.JWT_SECERT)
        const data = await User.findById(decoded.id)
        if(data.role==='admin'){
            req.isadmin=true
            
        }else{
            req.isadmin=false
        }
        req.payload=decoded.id
        next()
                
    } catch (err) {
        console.error(err.message)
        res.json({error:err.message})
    }

},
isAdmin:(req,res,next)=>{
    
        if(req.isAdmin){
            next()
            
        }else{
            res.status(403).json({error:"Un Auth User"});
        }
        
                
    
    
}
}
