const con = require('./conection'); // estanciando a conexao com o banco
const express = require('Express'); // trabalhando com Rotas
const bodyParser = require('body-parser'); // Biblioteca que pega dados do html 
const App = express();  // instanciando "App" medoto inicializa get put post delete
const Port = process.env.Port || '3000';    // porta de inicialização do projeto  '80', '8000' , '3000' etc
const ejs = require('ejs');     // Biblioteca para redenizar a paginas


App.engine('html', require('ejs').renderFile);
App.set('view engine', 'html');

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());

App.get('/', (request, responser) => {

    responser.render('../views/login');
});

App.get('/login', (request, responser) => {

    responser.render('../views/login');
});

App.post('/login/validar', (request, responser) => {

    email = request.body.email;
    password = request.body.password;

    sql = 'SELECT * FROM `usuario` WHERE email_user ="' + email + '" and senha_user="' + password + '"';

    con.query(sql, (err, result, fields) => {
        if (err) {

        } else {
            if (Object.keys(result).length === 0) {
                responser.render('../views/login');
            } else {
                
                sql = "select * from `usuario` where 1";

                con.query(sql, (err, resultado, filds) => {


                    if (err) {
                        console.log('Erro ao trazer o resultando' + err)
                    } else {
                        console.log(resultado)
                        responser.render("../views/home", { lista: resultado });

                    }

                });

            }
        }
    });

})


App.get('/home', (resquest, responser) => {

    sql = "select * from `usuario` where 1";

    con.query(sql, (err, resultado, filds) => {


        if (err) {
            console.log('Erro ao trazer o resultando' + err)
        } else {
            console.log(resultado)
            responser.render("../views/home", { lista: resultado });

        }

    });

});

App.get('/add/user', (request, responser) => {

    responser.render('../views/insert_user');
})

App.post('/insert/user/', (request, responser) => {

    nome = request.body.nome
    email = request.body.email
    telefone = request.body.telefone
    cep = request.body.cep
    uf = request.body.uf
    endereco = request.body.endereco
    cidade = request.body.cidade
    bairro = request.body.bairro
    password = request.body.password

    var variavel = {
        'nome': nome,
        'email': email,
        'telefone': telefone,
        'cep': cep,
        'uf': uf,
        'endereco': endereco,
        'cidade': cidade,
        'bairro': email,
        'senha': password

    }
    console.log(variavel)

    sql = "INSERT INTO `usuario`(`id_user`, `nome_user`, `email_user`, `num_user`, `cep_user`, `endereco_user`, `bairro_user`, `cidade_user`, `estado_user`, `senha_user`) VALUES (null,'" + variavel.nome + "', '" + variavel.email + "', '" + variavel.telefone + "', '" + variavel.cep + "', '" + variavel.endereco + "', '" + variavel.bairro + "', '" + variavel.cidade + "', '" + variavel.uf + "', '" + variavel.senha + "')";

    con.query(sql, (err) => {

        if (err) {

            console.log('Erro ao inserir na base de dados' + err)
        } else {


            responser.render('../views/insert_user')
            console.log('inserindo com sucesso');
        }

    })

})

App.get('/delete/:id', (request, responser) => {

    var id = request.params.id

    sql = "delete from usuario where id_user ='" + id + "'";

    con.query(sql, (err) => {

        if (err) {
            console.log('Erro ao deletar na base de dados' + err)
        } else {
            sql = "select * from `usuario` where 1";

            con.query(sql, (err, resultado, filds) => {


                if (err) {
                    console.log('Erro ao trazer o resultando' + err)
                } else {
                    console.log(resultado)
                    responser.render("../views/home", { lista: resultado });

                }

            });
        }

    })

});

App.listen(Port, () => {
    console.log('Porta ok')
});
