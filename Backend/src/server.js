const express = require('express');
const app = express();
const noteRouter = require('./routes/notes');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); // if true so we share nested object, else not
app.use(bodyParser.json());

mongoose.connect("connection string").then(() => {
    console.log('Mongoose in running')

    app.get('/', async (req, res) => {
        res.json({
            "message":"API is working!"
        });
    });
   
    app.use('/notes',noteRouter);
});


app.listen(5000, () => {
    console.log('App is running');
})
