const Product = require("../models/Product");





exports.addProduct = async(req,res)=>{
    const {p_name,category,rate,mark,price,imgurl} = req.body
    try {
        const newProduct = new Product({p_name,category,rate,mark,price,imgurl})
        await newProduct.save()
        res.send(newProduct)
        
    } catch (error) {
        res.status(502).json({msg:error.message})
        
    }

}

exports.allProduct = async(req,res)=>{
    try {
        const allproduct = await Product.find()
        res.send(allproduct)

    } catch (error) {
        res.send(error.message)
        
    }
}

exports.getNike = async (req,res)=>{
    try {
        const nikeMark = await Product.find({mark:'nike'})
        res.send(nikeMark)
    } catch (error) {
        res.send(error.message)
        
    }
}

exports.getAdidas =async(req,res)=>{
    try {
        const adidasMark = await Product.find({mark:'adidas'})
        res.send(adidasMark)
    } catch (error) {
        res.send(error.message)
        
    }
}

exports.getShoes = async(req,res)=>{
   try {
       const shoes = await Product.find({category:'shoes'})
       res.send(shoes)
   } catch (error) {
       res.send(error.message)
       
   }
}

exports.getTraining = async(req,res)=>{
    try {
        const training = await Product.find({category:'training'})
        res.send(training)
    } catch (error) {
        res.send(error.message)
        
    }
}


exports.getProduct=async(req,res)=>{
    res.send(req.Product)
}