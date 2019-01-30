const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const User = require('./models/user');



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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/register', (req, res, next) =>{
    const user = new User();

    user.profile.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function(err) {
        if(err) return next(err);
        res.json('Succesfully created a new User');
    });
});

app.listen(3000, function(err) {
    if(err)
        throw err;
        console.log("Server Running on Port 3000");
});
