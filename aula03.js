
const http = require('http'); // conectando http


const Port = 8081;  // definindo porta
const host = '127.0.0.1'; // definindo host

const servidor  = http.createServer((resquest,response)=>{

    response.writeHead(200,
        {'content-type':'text/html' }); 

       
    if(resquest.url == '/'){
        response.write(resquest.url);
       // response.write('home');
        console.log('home')
    
    
    }else if(resquest.url == '/sobre'){
        response.write(resquest.url);
        //response.write('sobre');
        console.log('sobre')
    }
    
 

        response.end();
});
servidor.listen(Port,host,()=>{
    console.log('conectado');
});