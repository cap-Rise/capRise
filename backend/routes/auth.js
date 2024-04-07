const express = require('express');
const router = express.Router();
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { google } = require('googleapis');
const fetchUser = require('../middleware/fetchUser');
const User = require('../models/User')
require('dotenv').config();
const uniqueUserNameGenerator = require("unique-username-generator");

const JWT_token = process.env.NODE_JWT_TOKEN;

router.post('/createuser', async (req, res) => {
    const success = false
    // Checking if user email is already exists or not 
    try {
        let user = await User.findOne({ 'email': req.body.email })
        if (user) {
            return res.status(400).json({ success, Error: 'User with this email already exist' })
        }
        // Creating User
        const uniqueName = uniqueUserNameGenerator.generateFromEmail(
            req.body.email,
            3
        );
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            pin: req.body.pin,
            totalMoneyInvested: req.body.totalMoneyInvested,
            totalMoneyReceived: req.body.totalMoneyReceived,
            rank: req.body.rank,
            totalStockBought: req.body.totalStockBought,
            totalStockSold: req.body.totalStockSold,
            userName: uniqueName,
            portfolioValue: req.body.portfolioValue,
            totalPnl: req.body.totalPnl
        })
        const data = {
            id: user.id
        }
        const token = jwt.sign(data, JWT_token);
        res.json({ success: true, token })

    } catch (error) {
        console.error(error);
    }

})

router.post('/getuser', fetchUser, async (req, res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        res.json(user);
    } catch (error) {
        console.error(error);
    }
})

router.post('/getalluser', async (req, res) => {

    try {
        const users = await User.find().select('name portfolioValue totalPnl');
        res.json(users)
    } catch (error) {
        console.error(error);
    }
})




router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/failure'
    }),
    async function (req, res) {
        // Successful authentication, redirect home.
        // console.log(res.req.user.id_token)
        const data = res.req.user;
        console.log(data)
        const googleToken = data.access_token
        const decoded = jwt.decode(data.id_token)
        console.log(decoded)
        // res.redirect("http://localhost:5000/auth/createuser")
        let token = null
        try {
            let success = false;
            let user = await User.findOne({ email: decoded.email });
            if (!user) {
                return res.status(400).json({ success, "error": "Please login with appropriate credentials" });
            } else {

                const data = {
                    id: user.id
                }
                token = jwt.sign(data, JWT_token);
                console.log(token)
                // res.setHeader({ token })
                res.redirect(`http://localhost:3000/callback/?authToken=${token}&googleToken=${googleToken}`)
            }
        } catch (error) {
            console.error(error);
        }
    });


// Assuming this middleware is defined elsewhere

router.get('/logout', fetchUser, async (req, res) => {
    try {
        // Logout user
        console.log(req.user.accessToken)
        const accessToken = req.user.accessToken;
        req.logout(async (err) => {
            if (err) {
                console.error('Error during logout:', err);
                return res.status(500).send('Error during logout');
            }

            // Revoke Google tokens

            if (accessToken) {
                const oauth2Client = new google.auth.OAuth2();
                oauth2Client.setCredentials({ access_token: accessToken });

                try {
                    await oauth2Client.revokeToken(accessToken);
                } catch (err) {
                    console.error('Error revoking token:', err);
                }
            }

            // Clear session
            req.session.destroy((err) => {
                if (err) {
                    console.error('Error destroying session:', err);
                    return res.status(500).send('Error destroying session');
                }

                // Redirect to the homepage
                res.json({ redirectTo: 'http://localhost:3000/auth' });
            });
        });
    } catch (err) {
        console.error('Error in logout route:', err);
        res.status(500).send('Internal Server Error');
    }
});




router.post('/verifypin', fetchUser, async (req, res) => {
    try {
        let success = false;
        const userId = req.user.id;
        const checkPin = req.body.pin;
        const user = await User.findById(userId);
        if (checkPin == user.pin) {
            const data = {
                id: user.id
            }
            token = jwt.sign(data, JWT_token);
            res.status(200).json({ success: true, token })
        } else {
            res.json({ success, Error: "Please Enter a Valid Pin" })
        }
    } catch (error) {
        console.error(error);
    }
})



module.exports = router;