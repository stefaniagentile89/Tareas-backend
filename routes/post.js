const express = require ('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.post('/nombre', postController.nombre)

module.exports = router;
