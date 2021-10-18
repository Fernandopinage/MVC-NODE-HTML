const mariadb = require('mariadb')

const Pool = mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'eurecatech',

}).then(con =>{
    con.query('SELECT * FROM `cnae`').then(
        rows =>{
            console.log(rows)
        }
    )
})
