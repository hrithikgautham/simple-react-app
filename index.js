const http = require('http');
const fs = require('fs');
const path= require('path');


const server = http.createServer((req, res) => {
	if(req.url === '/'){
		console.log(`users navigated to root page  url : ${req.url}`);
		res.writeHead(200, {"Content-Type" : "text/html"});
		res.write("<h1>hello!.. type getusers in the url to go to the getusers page</h1>");
		res.end();
	}else if(req.url === '/getusers'){
		console.log(`user navigated to getusers page url : ${req.url}`);
		fs.readFile(path.join(__dirname, "index.html"), 'utf8', (err, data) => {
			if(err){
				res.writeHead(404, {"Content-Type" : "text/html"});
				res.write("<h1>Some error in opening file!</h1>");
				res.end();
			}else{
				res.writeHead(200, {"Content-Type" : "text/html"});
				res.write(data);
				res.end();
				console.log(`Successfully rendered inde.html`);
			}
		});
	}else{
		res.writeHead(404, {"Content-Type" : "text/html"});
		res.write("<h1>Not Found...404 error!</h1>");
		res.end();
	}
});

server.listen(8000, () => {
	console.log("SERVER RUNNING ON PORT 8000 .....");
});