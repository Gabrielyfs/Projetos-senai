const express = require('express')
const app = express()

// lista para guardar os usuarios
let usuario = []
let id = 1

// middleware para processar JSON
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello node")
})

app.post("/usuario", (req, res) => {
    const { nome, email } = req.body

    if (!nome || !email) {
        return res.status(400).json({ error: "Email e nome são obrigatórios" })
    }

    // adicionando um usuario na lista de usuarios
    usuario.push({ id, nome, email })
    id++

    res.send()
})

app.get("/usuario", (req, res) => {
    res.json(usuario)
})

app.get("/usuario/:id", (req, res) => {
    const id =  parseInt(req.params.id)
    const user = usuario.find((user) => user.id == id)
    res.json(user)
})

app.delete("/usuario/:id", (req, res) => {
    const id = parseInt(req.params.id)
    usuario = usuario.filter((user) => user.id != id)
    res.json({mensage: "Usuário deletado com sucesso"})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})