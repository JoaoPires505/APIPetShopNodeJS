const express = require('express')
const routercr = require('./src/routes/cachorros')
const routerc = require('./src/routes/clientes')
const router = require('./src/routes/atendimento')

const app = express()
const port = 3000


app.use(express.json())
app.use(router)
app.use(routercr)
app.use(routerc)

app.listen(port, () => {
    console.log('servidor rodando na porta 3000')

})