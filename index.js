var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

//set up logging variables
var dd = new Date().getDay();
var mm = new Date().getMonth();
var yyyy = new Date().getFullYear();


router.use(function (req, res, next){
  var date = mm + "/" + dd + "/" + yyyy;
  var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
  console.log("/" + req.method + " " + date + " " + time);
  next();
});

router.get("/", function(req, res) {
  res.sendFile(path + "index.html");
});

router.get("/about", function(req, res){
  res.sendFile(path + "about.html");
});

router.get("/contact", function(req, res){
  res.sendFile(path + "contact.html");
});

app.use("/", router);

app.use(express.static('lib'));

app.use("*", function(req, res){
  res.sendFile(path + "404.html");
});

app.listen(3000, function(){
  console.log("app running at localhost:3000 - press ctrl+c to quit...");
})