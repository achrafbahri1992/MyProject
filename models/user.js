const mongoose = require ("mongoose");
const schema = mongoose.Schema;



const userSchema = new schema ({
    fname : String,
    lname : String, 
    email : String,
    password : String 


})



module.exports=mongoose.model("user",userSchema )