const http = require('http');
const fs = require('fs');
const querystring = require('querystring'); 
http.createServer((request, response) => {
    const file = request.url == '/' ? './WWW/index.html' : `./WWW/${request.url}`;
    if (request.method === 'POST') {
        let data = [];
        request.on('data', value => {
            data.push(value);
        }).on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            const parsedFormData = querystring.parse(parsedData);
            const { nombre, apellido, calle, codigo_postal, email } = parsedFormData;
            const formData = `Nombre: ${nombre}\nApellido: ${apellido}\nCalle: ${calle}\nCódigo Postal: ${codigo_postal}\nEmail: ${email}\n\n`;
            
            fs.appendFile('contactData.txt', formData, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    response.writeHead(500, { 'Content-Type': 'text/plain' });
                    response.end('Server Error');
                    return;
                }
                response.writeHead(302, { 'Location': '/' });
                response.end();
            });
        });
    } else {
        fs.readFile(file, (err, data) => {
            if (err) {
                //mandar 404
                response.writeHead(404, { "Content-Type": "text/plain" });
                response.write("not found");
                response.end();
            } else {
                const extension = request.url.split(".").pop();
                console.log(extension);
                switch (extension) {
                    case 'txt':
                        response.writeHead(200, { "Content-Type": "text/plain" });
                        break;
                    case 'html':
                        response.writeHead(200, { "Content-Type": "text/html" });
                        break;
                    case 'jpeg':
                        response.writeHead(200, { "Content-Type": "image/jpeg" });
                        break;
                }
                response.write(data);
                response.end();
            }
        })
    }
    

}).listen(8888);
