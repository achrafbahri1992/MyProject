const express = require('express');
const connectdb = require('./config/connectdb');
const user=require("./routes/users")
const product = require ("./routes/products")
const app = express();
const PORT = process.env.PORT|| 6000
connectdb();
app.use(express.json())
app.use("/user" , user)
app.use("/product", product)

app.listen(PORT,err=>err?console.log(error):console.log(`server is successfuly runnig on port ${PORT}`))

