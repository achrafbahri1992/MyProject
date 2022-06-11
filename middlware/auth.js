const config = require ("config")
const jwt = require("jsonwebtoken");
const user = require("../models/user");

const secret = config.get("secret")



const auth = async (req,res,next) =>{
    const token = req.headers.authorization ; 
    try {
       const decoded = jwt.verify(token, secret)
       const User = await user.findById(decoded.id)
        if (!User) {
            res.status(404).json({msg : "not autorized"})
            
        } else {
            req.user=User
            next()
            
        }
    } catch (error) {
        res.status(505).json({msg:error.message})
    }

}
module.exports=auth