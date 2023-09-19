const express = require('express');
const app = express();

const port = 3000;

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