const express = require('express')
const ControllerExercicio = require('../controllers/clientes')

const controller = new ControllerExercicio()
const router = express.Router()

router.get('/api/clientes/:id', controller.PegarUm)
router.get('/api/clientes/', controller.PegarTodos)
router.post('/api/clientes', controller.Add)
router.put('/api/clientes/:id', controller.Update)
router.delete('/api/clientes/:id', controller.Delete)

module.exports = router