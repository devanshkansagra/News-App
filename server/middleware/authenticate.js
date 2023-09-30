const jwt = require('jsonwebtoken');
const user = require('../model/user');

const Authenticate = async (req, res, next) => {
    try {
        
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRETKEY);

        const rootUser = await user.findOne({_id:verifyToken._id, "tokens.token": token});
        if(!rootUser) {
            throw new Error("User not found");
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
}

module.exports = Authenticate