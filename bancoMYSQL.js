async function getConection (){

    if(global.con && global.con.state !== 'disconnection')
        return global.con;

    const mysql = require('mysql2/promise');
    const con = await mysql.createConnection({
        host : 'localhost',
        database : 'carbox',
        user : 'root',
        pass : '',
    });

    console.log('conectado');

    global.con = con;
    return con;
}


getConection();