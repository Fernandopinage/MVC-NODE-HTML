const con = require('./banco/conection');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.port || "3000"

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{

    sql = "SELECT * FROM `usuario` WHERE 1";
    dados = con.query(sql,(err, result, fields)=>{

        if(err){
            console.log("Erro ao selecinar todos os dados do banco ")
        }
        
        res.send('/',{result})
    }); 
    
});

app.post("/filtrar",(req,res)=>{
    
    res.send("Filtrando")
});

app.get('/add',(req,res)=>{

    res.sendFile(__dirname+'/view/add.html');

});

app.post('/insert',(req,res)=>{

    var post ={

        nome : req.body.nome,
        num : req.body.numero,
        email : req.body.email
    }
    console.log(post)
        
    sql =  "INSERT INTO `usuario`( `nome_user`, `email_user`, `num_user`) VALUES ('"+post.nome+"','"+post.email+"','"+post.num+"')";

    con.query(sql,(err)=>{

        if(err){
            console.log('Erro ao inserir o dado '+err)
        }else{
           res.sendFile(__dirname+"/view/add.html")
        }
    })
})
app.listen(port)