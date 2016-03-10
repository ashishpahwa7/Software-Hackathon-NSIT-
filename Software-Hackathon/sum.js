var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    var params = url.parse(request.url,true).query;

    console.log(params);

   var a = params.number1;
   var numA = new Number(a);
   var testvar = a;
   var datetime=new Date();
      	var temp= typeof testvar;
	console.log(temp);
	

   response.write(a);
    

var fs = require('fs');
	
	fs.appendFile("DB.txt",testvar + "," + datetime + "\n", function(err) {
    	if(err) {
        return console.log(err);
    	}
  
}); 


}).listen(10001);



//*********************************************************************************


