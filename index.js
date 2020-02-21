var express = require("express");
 
var app = express();
 
app.use(express.static('./'));

app.get('*', function(request, response, next) {
    response.sendfile(__dirname + '/index.html');
});

 
var server = app.listen(process.env.PORT || 5000, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});