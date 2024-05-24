const http = require('http');
const fs = require('fs');
http.createServer((request, response) =>{
    const file = request.url == '/' ? './WWW/index.html' : `./WWW/${request.url}`;
    if(request.url == "/registry"){
        let data = [];
        request.on("data", value => {
            data.push(value);
        }).on("end", ()=> {
            let params = Buffer.concat(data).toString();
            response.write(params);
            response.end();
        })
        
    }
    fs.readFile(file, (err,data)=>{
        if(err){
            //mandar 404
            response.writeHead(404, {"Content-Type":"text/plain"});
            response.write("not found");
            response.end();
        }else{
            const extension = request.url.split(".").pop();
            console.log(extension);
            switch(extension) {
                case 'txt':
                    response.writeHead(200, {"Content-Type":"text/plain"});
                break;
                case 'html':
                    response.writeHead(200, {"Content-Type":"text/html"});
                break;
                case 'jpeg':
                    response.writeHead(200, {"Content-Type":"image/jpeg"});
                break;
            }
            response.write(data);
            response.end();
        }
    })
    
}).listen(8888);
