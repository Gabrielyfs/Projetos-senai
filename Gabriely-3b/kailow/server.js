/* Server do site */

const express = require("express")

const path = require("path")

const server = express()

const db = require('./src/config/db_connect.js')



/* Porta do site */
server.listen(3010, () => {
    console.log("Servidor no ar, porta 3010")
})


/* Tornando a pasta "public" pulica */
server.use(express.static('public'))

server.use(express.urlencoded({ extended: true }))




/* home */
server.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/home_no.html'))

})



/* login e cadastro */
server.get('/cadastro', (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/cadastro.html'))

})

server.get('/login', (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/login.html'))

})




/* suporte sobre contato */
server.get('/suporte.no', (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/suporte_no.html'))

})

server.get('/sobre.no', (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/sobre_no.html'))

})

server.get('/contato.no', (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/contato_no.html'))

})




/* catalogo produto vender carrinho*/
server.get('/catalogo.no', (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/catalogo_no.html'))

})

server.get('/vender.no', (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/vender_no.html'))

})














/* home */
server.get('/home', (req, res) => {

    res.sendFile(path.join(__dirname, '../views/home.html'))

})




/* suporte sobre contato */
server.get('/suporte', (req, res) => {

    res.sendFile(path.join(__dirname, '../views/suporte.html'))

})

server.get('/sobre', (req, res) => {

    res.sendFile(path.join(__dirname, '../views/sobre.html'))

})

server.get('/contato', (req, res) => {

    res.sendFile(path.join(__dirname, '../views/contato.html'))

})




/* catalogo produto vender carrinho*/
server.get('/catalogo', (req, res) => {

    res.sendFile(path.join(__dirname, '../views/catalogo.html'))

})

server.get('/produto', (req, res) => {

    res.sendFile(path.join(__dirname, '../views/produto.html'))

})

server.get('/vender', (req, res) => {

    res.sendFile(path.join(__dirname, '../views/vender.html'))

})

server.get('/carrinho', (req, res) => {

    res.sendFile(path.join(__dirname, '../views/carrinho.html'))

})







/* cadastro */

server.post('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname,"../pages/cadastro.html"))
    //Receber as informações do cadastro e slavar no DB
    console.log(req.body);

    const { nome, cpf, email, senha, telefone } = req.body

    const sql = "INSERT INTO usuarios (nome, cpf, email, senha, telefone) VALUES (?,?,?,?,?)"

    db.query(sql, [nome, cpf, email, senha, telefone], (error, reults) => {
        if (error) {
            console.log(error);

            console.log("Erro ao cadastrar...");
        } else {
            console.log("Usuario cadastrado com sucesso!");
            console.log(reults);
        }
    })
    
    res.redirect('/home')

})





server.post('/login', (req, res) => {

    const { email, senha } = req.body

    const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?"

    db.query(sql, [email, senha], (error, results) => {
        if (error) {
            console.log("Erro ao logar...");
        } else {
            console.log("Usuario login com sucesso!");
            console.log(results);

            if (results.length > 0) {
                res.redirect('/home')
            } else {
                res.redirect('/cadastro')
            }
        }
    })
})





server.post('/contato', (req, res) => {
    //Receber as informações do cadastro e slavar no DB
    console.log(req.body);

    const { nome, email, mensagem } = req.body

    const sql = "INSERT INTO mensagem (nome, email, mensagem) VALUES (?,?,?)"

    db.query(sql, [nome, email, mensagem], (error, reults) => {
        if (error) {
            console.log(error);

            console.log("Erro ao receber mensagem...");
        } else {
            console.log("Mensagem recebida!");
            console.log(reults);
        }
    })

    res.redirect('/contato')
})



server.post('/contato.no', (req, res) => {
    //Receber as informações do cadastro e slavar no DB
    console.log(req.body);

    const { nome, email, mensagem } = req.body

    const sql = "INSERT INTO mensagem (nome, email, mensagem) VALUES (?,?,?)"

    db.query(sql, [nome, email, mensagem], (error, reults) => {
        if (error) {
            console.log(error);

            console.log("Erro ao receber mensagem...");
        } else {
            console.log("Mensagem recebida!");
            console.log(reults);
        }
    })

    res.redirect('/contato.no')
})