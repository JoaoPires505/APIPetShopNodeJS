const express = require('express')
const ControllerExercicio = require('../controllers/cachorro.js')
const authMiddleware = require('../middleware/auth.js')

const controller = new ControllerExercicio()
const RouterCachorros = express.Router()

RouterCachorros.get('/petlife/cachorro/:id', authMiddleware, controller.PegarUm)
RouterCachorros.get('/petlife/cachorro/', authMiddleware, controller.PegarTodos)
RouterCachorros.post('/petlife/cachorro', authMiddleware, controller.Add)
RouterCachorros.put('/petlife/cachorro/:id', authMiddleware, controller.Update)
RouterCachorros.delete('/petlife/cachorro/:id', authMiddleware, controller.Delete)

module.exports = RouterCachorros