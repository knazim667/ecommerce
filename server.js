const express = require('express');
const morgan = require('morgan');





const app = express();

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
