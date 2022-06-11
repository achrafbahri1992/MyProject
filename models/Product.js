const mongoose = require("mongoose")
const schema = mongoose.Schema ; 



const productSchema= new schema({
    p_name : String ,
    category : String , 
    rating : Number,
    mark : String,
    price : String,
    imgurl:String


})


module.exports=mongoose.model("product",productSchema)
