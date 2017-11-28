//const fs = require('fs');
const express = require('express');
const bodyParser= require('body-parser');
var path = require('path');

app = express(),
port = process.env.PORT || 8080,
expressLayouts = require('express-ejs-layouts');

app.use(bodyParser.urlencoded({extended: true}));

//set view engine and view path
app.set('view engine', 'ejs');
app.use(expressLayouts);
var viewPath = path.join(__dirname, 'app/views');
app.set('views', viewPath);

const mongoose = require('mongoose');

//DB setup
mongoose.connect('mongodb://localhost:/car_pooling',{ useMongoClient: true });
app.use(require('./app/routes'));

app.use(express.static(__dirname + '/app/public'));

app.listen(3010);
console.log('listening on 3010');
