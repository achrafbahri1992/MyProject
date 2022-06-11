
const user = require("../models/user")
const bc = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const secret= config.get("secret")


exports.signUp=async(req,res)=>{
    const {fname,lname,email,password}= req.body
    try {
        const userExist= await user.findOne({email})
        if (userExist) {
            res.status("400").json({msg:"user already exist"})
        }


        else{
        const newUser = new user({fname,lname,email,password})
        const salt = await bc.genSalt(10)
        const hash = await bc.hashSync(password,salt)
        newUser.password=hash 


        const payload ={
            id : newUser._id,
            username: newUser.fname,
            email : newUser.email,
        }


        const token = jwt.sign(payload, secret)
        res.status(200).send({
            token, user:{
                _id : newUser._id,
                email : newUser.email,
                fname : newUser.fname,
                lname : newUser.phone,
                password : newUser.password,
            }
        })


        await newUser.save()

        res.send(newUser)
    }
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


    exports.login = async(req,res)=>{
        const {email,password}=req.body
        try {
            const userLogin = await user.findOne({email})
            if (!userLogin) {
                res.status(402).json({msg:"wrong email or password"})
                }
            const passExist = await bc.compare(password , userLogin.password)
            if (!passExist) {
                res.status(402).json({msg : "wrong email or password"})
                
            }
            
            const payload = {
                _id : userLogin._id,
                fname : userLogin.fname,
                email : userLogin.email,
                phonefname : userLogin.phonefname,
            }

            const token = jwt.sign(payload , secret);
            res.status(203).send({
                _id : userLogin._id,
                fname : userLogin.fname,
                email : userLogin.email,
                lmane : userLogin.lname,
                password : userLogin.password,
            })

        } catch (error) {
            res.status(501).json({msg : error.message})
        }


    }

    exports.getUser=(req,res)=>{
        res.send(req.user)
    }

    