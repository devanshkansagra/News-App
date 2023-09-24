const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bycrypt = require('bcryptjs');

require("../db/connect");

router.get('/', (req, res) => {
    res.send('This is a message from express router');
});

const middleware = (req, res, next) => {
    console.log("Waiting for login");
    next();
}

router.get('/about', middleware, (req, res) => {
    console.log("Login Successful");
    res.send("This is about page");
});

// Registration

// Async-Await method
router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;

    try {
        if (!name || !email || !phone || !password || !cpassword) {
            return res.status(422).json({ error: "Details are not entered properly" });
        }
        const response = await User.findOne({ email: email });

        // Email Validation
        if (response) {
            res.status(422).json({ error: "Email is already in use" });
        }
        else if (password != cpassword) {
            res.status(401).json({ error: "Passwords doesn't match" });
        }
        else {
            const user = new User({ name, email, phone, password, cpassword });

            const userSave = await user.save();

            if (userSave) {
                res.status(201).json({ success: "User registered successfully" });

            }
        }

    } catch (error) {
        console.log(error);
    }

});

// Promises method

// router.post('/register', (req, res) => {
//     const {name, email, phone, password, cpassword} = req.body;
//     // res.json({message: req.body});

//     if(!name || !email || !phone || !password || !cpassword) {
//         return res.status(422).json({error: "Details are not entered properly"});
//     } 

//     // databaseAttributeName:variableName
//     // response is simply if user exist with that particular email exists or not
//     User.findOne({email:email}).then((response) => {
//         if(response) {
//             return res.status(422).json({error: "Email is already in use"});
//         }

//         const user = new User({name, email, phone, password, cpassword});

//         user.save().then(() => {
//             res.status(201).json({message: "User registered successfully"}) 
//         }).catch((error) => {
//             res.status(500).json({message: "User was unable to register due to internal server error"})
//         })
//     }).catch(err => {
//         console.log(err);
//     })

// });


// Login
router.post('/login', async (req, res) => {
    let tokenUser;
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "Please enter the details properly" });
        }
        else {
            const user = await User.findOne({ email: email });

            tokenUser = await user.generateAuthToken();

            const comparePassword = await bycrypt.compare(password, user.password);
            
            if(tokenUser) {
                console.log(tokenUser);
            }

            if (user && comparePassword) {
                res.status(200).json({ message: "Succesfully logged in" });
            }
            else {
                res.status(404).json({ message: "Invalid Credentials" });
            }
            
        }

    } catch (error) {
        res.status(404).json({error: "User not found"});
    }
});

module.exports = router;