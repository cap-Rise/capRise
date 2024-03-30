const express = require('express');
const router = express.Router();
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { google } = require('googleapis');
const fetchUser = require('../middleware/fetchUser');


router.get('/createuser', (req, res) => {
    res.send("Hello")
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
        const decoded = jwt.decode(data.id_token)
        console.log(decoded)
        res.redirect("http://localhost:5000/auth/createuser")
        // let token = null
        // // try {
        //     let success = false;
        //     let user = await User.findOne({ email: decoded.email });
        //     if (!user) {
        //         return res.status(400).json({ success, "error": "Please login with appropriate credentials" });
        //     } else {
        //         if (user.role === "ADMIN" || user.role === "COUNCIL"
        //         ) {
        //             const data = {
        //                 id: user.id
        //             }
        //             token = jwt.sign(data, JWT_token);
        //             console.log(token)
        //             // res.setHeader({ token })
        //             // res.redirect("http://localhost:5173/callbackgoogle/?callback=" + token)
        //             res.send("Google Success");
        //         } else {
        //             res.status(401).json({
        //                 success: false,
        //                 error: "Please Login with proper Credentials"
        //             })
        //         }
        //     }
        // } catch (error) {
        //     console.error(error);
        // }
    });


router.get('/logout',fetchUser, (req, res) => {

    req.logout((err) => {
        if (err) {
            console.error('Error during logout:', err);
            return res.status(500).send('Error during logout');
        }

        // Revoke Google tokens
        const accessToken = req.user.accessToken; // Assuming you have this in your user session
        const oauth2Client = new google.auth.OAuth2();
        oauth2Client.setCredentials({ access_token: accessToken });
        oauth2Client.revokeToken(accessToken, (err) => {
            if (err) {
                console.error('Error revoking token:', err);
                // Continue with logout even if token revocation fails
            }

            // Clear local session
            req.session.destroy((err) => {
                if (err) {
                    console.error('Error destroying session:', err);
                    return res.status(500).send('Error destroying session');
                }

                // Redirect to the homepage
                res.redirect('http://localhost:5000/');
            });
        });
    });
});



router.get('/verifypin', (req, res) => {
    res.send("Hello verify pin")
})



module.exports = router;