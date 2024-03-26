const http = require("http");
const fs = require("fs");
  
http.createServer(async (request, response) => {
	fs.readFile("index.html", (_, data) => response.write(data));
	if (request.method === 'GET'){
		fs.readFile("text.txt", function(error, data){
			if(error){     
				response.statusCode = 404;
				response.end("Resourse not found!");
			}   
			else{
				response.end(data);
			}
    });
	} else if (request.method === 'POST'){
		let body = "";
		for await (const chunk of request) {
			body += chunk;
		}
		let userName = "";
		const params = body.split("&");
		for(param of params){
			const [paramName, paramValue] = param.split("=");
			if(paramName === "username") userName = paramValue;
		}
		response.end(`Your name: ${userName}`);
		fs.writeFile('text.txt', body, 'utf8', (error) => {
                if (error) {
                    response.statusCode = 404;
                    response.end('Resourse not found!');
                } else {
                    response.end('Data added to file');
                }
            });
	}
    
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));