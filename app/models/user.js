var mongoose = require('mongoose');

var db = mongoose.connection;
module.exports = {
        url : 'mongodb://localhost/stencil-dev'
    }


db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
  var userSchema = new mongoose.Schema({
  Name: String 
, _id: String
, username: String
, items: String});
});


mongoose.connect('mongodb://localhost/test');
