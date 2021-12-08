const mysql = require('mysql2')

const con=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'node'
});

con.connect((err)=>{

    if(err){
        console.log("Erro ao se conectar com o banco "+err)
    }else{
        console.log('Conectado!')
    }
  
});

module.exports = con;