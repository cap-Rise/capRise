const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.NODE_MONGO_URI;

const connectTOMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongodb")

}

module.exports = connectTOMongo;