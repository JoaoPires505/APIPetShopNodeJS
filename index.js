const express = require('express')
const router = require('./src/routes/petshop')

const app = express()
const port = 3000


app.use(express.json())
app.listen(port, () => {
    console.log('servidor rodando na porta 3000')

})