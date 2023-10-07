const express = require('express')
const ControllerExercicio = require('../controllers/atendimento')

const controller = new ControllerExercicio()
const router = express.Router()

router.get('/api/atendimento/:id', controller.PegarUm)
router.get('/api/atendimento/', controller.PegarTodos)
router.post('/api/atendimento', controller.Add)
router.put('/api/atendimento/:id', controller.Update)
router.delete('/api/atendimento/:id', controller.Delete)

module.exports = router