var mongoose = require('mongoose');
console.log("inside of db");
mongoose.connect('mongodb://localhost/bounce');
var db = mongoose.connection;

data = db.items.find();