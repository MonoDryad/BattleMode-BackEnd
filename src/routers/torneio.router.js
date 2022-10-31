const router = require('express-promise-router')()
const torneioController = require('../controllers/torneio.controllers')

router.get('/torneio', torneioController.findAll)
router.get('/torneio/:id', torneioController.findByPk)
router.post('/torneio', torneioController.create)
router.put('/torneio/:id', torneioController.update)
router.delete('/torneio/:id', torneioController.delete)

module.exports = router