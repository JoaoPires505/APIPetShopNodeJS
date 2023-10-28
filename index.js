const express = require('express')
const RouterClientes= require('./src/routes/cliente.js')
const RouterCachorros= require('./src/routes/cachorro.js')
const RouterAtendimentos= require('./src/routes/atendimento.js')
const RouterUsuarios= require('./src/routes/usuario.js')
const app = express()
const port = 3000

app.use(express.json())
app.use(RouterCachorros, RouterClientes, RouterAtendimentos, RouterUsuarios)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
    