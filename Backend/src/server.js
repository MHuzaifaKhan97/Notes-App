const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

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
    app.post('/notes/list', async (req, res) => {
        const notes = await Note.find({ userid: req.body.userid });
        res.json(notes);
    });

    app.post('/notes/add', async (req, res) => {
        await Note.deleteOne({id: req.body.id});

        const newNote = new Note({
            id: req.body.id,
            userid: req.body.userid,
            title: req.body.title,
            content: req.body.content,
        });
        await newNote.save();
        const response = { "message": `New note created with id: ${req.body.id}` };
        res.json(response);
    });

    app.post('/notes/delete', async (req, res) => {
        await Note.deleteOne({id: req.body.id});
        const response = { "message": `Note deleted with id: ${req.body.id}` };
        res.json(response);

    });


});


app.listen(5000, () => {
    console.log('App is running');
})
