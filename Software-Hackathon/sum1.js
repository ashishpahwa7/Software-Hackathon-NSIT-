var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    var params = url.parse(request.url,true).query;

    console.log(params);

   var a = params.number2;
   var numA = new Number(a);
 
   var testvar = a; 
   var fs = require('fs');
   var datetime = new Date();
 

    response.write(a);
    
 

	
	
	fs.appendFile("DB1.txt",testvar + "," + datetime + "\n", function(err) {
    	if(err) {
        return console.log(err);
    	}


     
}); 


}).listen(10002);



//*********************************************************************************


