const express = require('express')
const ControllerAtendente = require('../controllers/atendente')
const authMiddleware = require('../middleware/auth')

const controller = new Atendente()
const RouterAtendente = express.Router()

RouterAtendente.get('/api/atendente/:id', authMiddleware, controller.PegarUm)
RouterAtendente.get('/api/atendente/', authMiddleware, controller.PegarTodos)
RouterAtendente.post('/api/atendente', authMiddleware, controller.Add)
RouterAtendente.put('/api/atendente/:id', authMiddleware, controller.Update)
RouterAtendente.delete('/api/atendente/:id', authMiddleware, controller.Delete)

module.exports = RouterAtendente