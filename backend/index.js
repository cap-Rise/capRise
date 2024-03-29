const express = require("express");
const app = express();
require('dotenv').config();
const connectTOMongo= require('./db');
const cors = require("cors");

app.use(express.json());
app.use(cors());



const PORT = process.env.NODE_SERVER_PORT;

connectTOMongo();

app.use('/auth',require('./routes/auth'));

app.get('/',(req,res)=>{
    res.json({
        Server:"Server Started on PORT : 5000"
    })
})


app.listen(PORT,()=>{
    console.log("Server started PORT : " + PORT);
})