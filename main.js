//import required things
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
const fs = require('fs');

//crreate server insta
var app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static('.'));

//create express rooter component
var router = new express.Router();

// programel
router.get('/',function (req,res){
  fs.readFile('facebook.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

//start listening for incoming connections
var port = 8080;
var hostname = '127.0.0.1';
app.listen(port, hostname, function () {
  console.log("port"+port);
});
