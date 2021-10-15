const http = require('http');
const fs = require('fs');
const port = 8081;
const host = 'localhost';

const servidor = http.createServer((request,response)=>{

    fs.readFile('index.html', (err,arquivo)=>{

        response.writeHead(200,{
            'content-type':'text/html'
            
        });

            response.write(arquivo)

            response.end();

    });
}).listen(port,host,()=>{
    console.log('conectado')
});