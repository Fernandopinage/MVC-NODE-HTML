const http = require('http'); // criando uma variavel para consumir http

http.createServer((require,response)=>{ // criando o servidor

    response.writeHead(200,             // mensagem que retorna ao conectar com o servidor 
        {
            'content-type':'text/plain' // tipo de mensagem html texto .etc
        });

        response.write('conectado')     // mensagem do retorno
        response.end();                 // fechando o servidor 
}).listen(8081);

