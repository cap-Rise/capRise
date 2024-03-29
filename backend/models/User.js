const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    pin:{
        type:Number,
        require:true
    },
    totalMoneyInvested:{
        type:Number,
        require:true,
        default:0,
    },
    totalMoneyReceived:{
        type:Number,
        require:true,
        default:0
    },
    rank:{
        type:Number,
        default:0,
    },
    totalStockBought:{
        type:Number,
        require:true,
        default:0,
    },
    totalStockSold:{
        type:Number,
        require:true,
        default:0,
    },
    userName:{
        type:String,
    },
    portfolioValue:{
        type:Number,
        require:true,
        default:0,
    },
    totalPnl:{
        type:Number,
        require:true,
        default:0,
    },
    date:{
        type:Date,
        default:Date.now
    },

});
const User =mongoose.model('user',userSchema);
User.createIndexes();
module.exports=User;