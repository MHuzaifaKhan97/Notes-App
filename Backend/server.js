const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send({
        "message":"Hello World"
    });
});

app.listen(5000,()=>{
    console.log('App is running');
})
