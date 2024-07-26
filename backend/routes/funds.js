const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const fetchUser = require('../middleware/fetchUser');

router.post('/', fetchUser, async (req, res) => {
    const { amount } = req.body;
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.totalMoneyReceived -= amount;
        user.caprisePoints += amount * 100;
        await user.save();

        res.status(200).json({ message: 'Update successful', redirect: '/successPts' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
