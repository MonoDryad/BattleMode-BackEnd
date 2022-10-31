const router = require('express-promise-router')()
const timeController = require('../controllers/time.controllers')

router.get('/time', timeController.findAll)
router.get('/time/:id', timeController.findByPk)
router.post('/time', timeController.create)
router.put('/time/:id', timeController.update)
router.delete('/time/:id', timeController.delete)

module.exports = router