var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a signup schema
var signup = new Schema({
    name: String,
    email: String,
    password: String,
    created_at: Date
})

//Create collection(table) with the name of Signup
var signup = mongoose.model('Signup', signup);

// make this available to our users in our Node applications
module.exports = { signup: signup };
