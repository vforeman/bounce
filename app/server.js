var express        = require('express');
var app            = express();
var routes  = require("./routes");
var http = require("http");
var mongoose = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
    app.set('port',process.env.PORT || 5000);
// config files
	var MongoClient = require('mongoDB').MongoClient;
	MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db){
	    if( !err ){
	         console.log("We are connected");
	    } else console.log(err);
	});


	var userSchema = mongoose.Schema({
    name: String
});
		mongoose.model('users',userSchema);

	app.get("/",function(req,res){
		res.send("Hello world");
	})

	app.get("/user",function(req,res){
		mongoose.model('users').find(function(err,users){
			res.send(users);
		});
	});
