
const express = require('express')
const app=express()
const port=process.env.port;


app.get('/',(request,response)=>{

        response.send('home')
})

app.get('sobre',(request,response)=>{

    response.send('sobre')
})

app.listen(port || '3000',()=>{
    console.log('conectado')
})


/*

    ////// sem express

const http = require('http');
const port = process.env.PORT;
const serve = '127.0.0.1';

const servidor = http.createServer((request,responser)=>{

    responser.writeHead(200,{
        'content-type':'text-plain'
        
    })
        responser.write('Aqui')
    responser.end();

}).listen(port || '3000', ()=>{
    console.log('conectado')
});

*/