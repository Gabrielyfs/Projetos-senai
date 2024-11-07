// 1. criar endpoint que mostra uma tela inicial para escolher: Login e cadastro
// 2. criar um endpoint que mostra um html com cadastro
// 3. criar um endpoint que pega os dados e salva no banco de dados

const express = require("express")
const path = require('path')
const server = express()
const db = require('./config/db_connect')

server.use(express.static('public'))

server.use(express.urlencoded({ extended: true }))

// endpoint que mostrará a minha home
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

server.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

server.post('/login', (req, res) => {

    const {email, password} = req.body

    // verificar user e senha
    // if senha ok e user existe => home
    // erro => voltar para a principal
    const sql = 'SELECT * FROM usuarios WHERE email = ?'

    db.query(sql, [email], (error, results) => {
        if (error) {
            console.log("erro ao logar...")
        } else {
            console.log('usuário logado com sucesso')
            console.log(results)
            // verificar se a senha é igual

            if (results.lengh > 0) {
                res.redirect('/home')
            } else {
                res.redirect('/')
            }
        }
    })
    
})

server.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/cadastro.html'))
})

server.post('/cadastro', (req, res) => {
    // receber as informações do cadastro e salvar no banco de dados

    console.log(req.body)
    // salvar as info no DB

    const {nome, email, password} = req.body

    const sql = 'INSERT INTO usuarios (nome, email, password) VALUES (?, ?, ?)'

    db.query(sql, [nome, email, password], (error, results) => {
        if (error) {
            console.log("erro ao cadastrar...")
        } else {
            console.log('usuário cadastrado com sucesso')
            console.log(results)
        }
    })

    // levar o user para a tela inicial
    res.redirect('/')
})

server.listen(3010, () => {
    console.log("servidor no ar na porta 3010")
})
