const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');





const app = express();

//Connect to mongoose db
mongoose.connect('mongodb://knazim667:Salman007@ds217125.mlab.com:17125/ecommerce', function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Connected to Database");
    }
})

//Middlware
app.use(morgan('dev'));


app.get('/', (req, res) => {

    const name = "Nazam";
    res.json("My Name is " + name);
});

app.get('/name', (req, res) => {
    res.json("My Name is Nazam");
});

app.listen(3000, function(err) {
    if(err)
        throw err;
        console.log("Server Running on Port 3000");
});
