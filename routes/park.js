const express = require("express")
const router = express.Router()

// import Controllers
const parkCtrl = require("../controllers/park")

// routes
router.post("/", parkCtrl.addPark)

// Route to get all parks
router.get("/", parkCtrl.getAllParks)

// Route to get parks games
router.get("/games/:parkId", parkCtrl.getParkGames)

// Route to delete parks games
router.delete("/:parkId/games/:gameId", parkCtrl.deleteParkGame)

module.exports = router
