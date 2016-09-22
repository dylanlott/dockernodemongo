var express = require('express');
var app = express();
var mongoose = require("mongoose");

mongoose.connect('mongodb://mongo:27017');
app.get('/', function(req, res){
    res.send("Hello World");
});

app.listen(3000, function(){
    console.log('Docker app listening on port 3000!');
});

