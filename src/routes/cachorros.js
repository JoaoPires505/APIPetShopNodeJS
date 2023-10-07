const express = require('express')
const ControllerExercicio = require('../controllers/cachorros')

const controller = new ControllerExercicio()
const router = express.Router()

router.get('/api/cachorros/:id', controller.PegarUm)
router.get('/api/cachorros/', controller.PegarTodos)
router.post('/api/cachorros', controller.Add)
router.put('/api/cachorros/:id', controller.Update)
router.delete('/api/cachorros/:id', controller.Delete)

module.exports = router