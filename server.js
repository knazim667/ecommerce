const express = require('express');

const app = express();


app.get('/', (req, res) => {

    const name = "Nazam";
    res.json("My Name is " + name);
})

app.listen(3000, function(err) {
    if(err)
        throw err;
        console.log("Server Running on Port 3000");
});
