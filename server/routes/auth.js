const express = require('express');
const router = express.Router();
const User = require('../model/user');

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

router.post('/register', (req, res) => {
    const {name, email, phone, password, cpassword} = req.body;
    // res.json({message: req.body});
    
    if(!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({error: "Details are not entered properly"});
    } 

    // databaseAttributeName:variableName
    // response is simply if user exist with that particular email exists or not
    User.findOne({email:email}).then((response) => {
        if(response) {
            return res.status(422).json({error: "Email is already in use"});
        }

        const user = new User({name, email, phone, password, cpassword});

        user.save().then(() => {
            res.status(201).json({message: "User registered successfully"}) 
        }).catch((error) => {
            res.status(500).json({message: "User was unable to register due to internal server error"})
        })
    }).catch(err => {
        console.log(err);
    })
    
});

module.exports = router;