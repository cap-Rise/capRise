const express = require("express");
const app = express();
const passport=require('passport')
const session = require('express-session');
require('dotenv').config();
const connectTOMongo= require('./db');
const cors = require("cors");
require('./passport')

app.use(express.json());
app.use(cors());
app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());



const PORT = process.env.NODE_SERVER_PORT;

connectTOMongo();

app.use('/auth',require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('<a href="auth/google" >Authenticate with Google</a>')
})

app.listen(PORT,()=>{
    console.log("Server started PORT : " + PORT);
})