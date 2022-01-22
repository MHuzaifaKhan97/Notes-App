const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect("connection string").then(() => {
console.log('Mongoose in running')
app.get('/', (req, res) => {
        res.send({
            "message": "Hello Wrld"
        });
    });
})


app.listen(5000, () => {
    console.log('App is running');
})
