const mongoose = require("mongoose")
const config = require("config")
const db = config.get("db")

const connectdb =async() =>{
    try {
        await mongoose.connect(db)
        console.log("data bases successfully connected ")
    } catch (error) {
        console.log(error.message)
    }
}



module.exports= connectdb