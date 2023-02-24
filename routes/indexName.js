const express = require ('express')
const router = express.Router()
const indexNameController = require('../controllers/indexNameController')

router.get('/:name/:lastName', indexNameController.hola)

module.exports = router