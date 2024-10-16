const express = require('express')
const router = express.Router()

const gameCtrl = require('../controllers/game')
// Create a new game
router.get('/', gameCtrl.getPark)
router.post('/:parkId', gameCtrl.addGame)

module.exports = router
