var express = require("express");
 
var app = express();
 
app.use(express.static('./'));

 
var server = app.listen(process.env.PORT || 5000, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});