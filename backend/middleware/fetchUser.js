// middleware to fetch user
var jwt = require('jsonwebtoken');
require("dotenv").config();

const fetchUser = (req, res, next) => {

    try {
        const token = req.header('google-access-token');
        if (!token) {
            res.status(401).json({ Error: "Please enter correct auth token" });
        }
        const data = {
            accessToken:token,
        };
        req.user = data;
        next();
    } catch (error) {
        console.error(error);
    }

}

module.exports = fetchUser;
