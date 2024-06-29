const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Reward = require('../models/Reward');
const User = require('../models/User');
const router = express.Router();


router.post('/addrecord', fetchUser, async (req, res) => {
    const userId = req.user.id
    let user = await User.findById(userId);
    let requiredPoints = req.body.requiredPoints;

    if (requiredPoints > user.caprisePoints) {
        res.json({
            success: false
        })
    } else {
        let Record = await Reward.create({
            user_id: user.id,
            amountAwarded: req.body.amountAwarded,
            pointsUsed: req.body.pointsUsed,
        })
        res.json({
            success: true,
            amountAwarded: req.body.amountAwarded,
            pointsUsed: req.body.pointsUsed,
        })
    }


})

router.put('/updateuser',(req,res)=>{
    
})


module.exports = router;