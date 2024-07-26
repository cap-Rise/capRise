const express = require('express');
const router = express.Router();
const User = require('../models/User');
const fetchUser = require('../middleware/fetchUser');

// Route to update user's totalMoneyReceived and caprisePoints
router.post('/', fetchUser, async (req, res) => {
    try {
        const userId = req.user.id;
        const { amount } = req.body;

        // Convert amount to a number
        const amountNumber = Number(amount);

        // Find the user by ID
        let user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update the user's totalMoneyReceived and caprisePoints
        user.totalMoneyReceived -= amountNumber;
        user.caprisePoints += amountNumber * 100;

        // Save the updated user data
        await user.save();

        // Redirect to success page
        res.status(200).json({ message: "Update successful", redirect: "/success" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
