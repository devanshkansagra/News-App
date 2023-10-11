const jwt = require('jsonwebtoken');
const User = require('../model/user');

const Authenticate = async (req, res, next) => {
    try {
        
        // Getting the token from cookies
        const token = req.cookies.token;

        // Verifying the token with the secret key
        const verifyToken = jwt.verify(token, process.env.SECRETKEY);

        // Finding the user with the help of token
        const rootUser = await User.findOne({_id:verifyToken._id, "tokens:token":token})

        // Check if the rootUser exists or not
        // If not then throw new error
        if(!rootUser) {
            throw new Error('User not found')
        }
        else {
            req.token = token;
            req.rootUser = rootUser;
            req.userId = rootUser._id;

            next();
        }

    } catch (error) {
        res.status(401).send("Unauthorized");
        console.log(error);
    }
};

module.exports = Authenticate;
