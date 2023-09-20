const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// This is how you require the extern custom module using js
// const User = require('./model/user');


// Dotenv
dotenv.config({path: './config.env'});
const port = process.env.PORT;

// Mongoose
require('./db/connect');


const middleware = (req, res, next) => {
    console.log("Waiting for login");
    next();
}
app.get('/', (req, res) => {
    res.send("This is home page");
});
app.get('/about', middleware, (req, res) => {
    console.log("Login Successful");
    res.send("This is about page");
});
app.get('/contact', (req, res) => {
    res.send("This is contact page");
});

app.listen(port, () => {
    console.log(`Server is listening on => http://localhost:${port}`);
});