const router = require('express-promise-router')()
const jogoController = require('../controllers/jogo.controllers')

router.get('/jogo', jogoController.findAll)
router.get('/jogo/:id', jogoController.findByPk)
router.post('/jogo', jogoController.create)
router.put('/jogo/:id', jogoController.update)
router.delete('/jogo/:id', jogoController.delete)

module.exports = router