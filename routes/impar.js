const express = require ('express')
const router = express.Router()
const imparController = require('../controllers/imparController')

router.get('/', imparController.impar)

module.exports = router;