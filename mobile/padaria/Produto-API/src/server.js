const express = require('express')
const routes = require('./routes')
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta', 3000)
})