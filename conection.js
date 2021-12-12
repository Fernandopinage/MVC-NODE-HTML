const msyql = require('mysql2')                // importando a biblioteca do mysql

const con = msyql.createConnection({           // criando a conexao passando os parametros  host, user, password e  datavase

    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'node'

});

con.connect((err)=>{                        // Testando a conecão.

    if(err){
        console.log('erro'.err)
    }else{
        console.log('Conectado')
    }   
});


module.exports = con;                     // exportando conexao