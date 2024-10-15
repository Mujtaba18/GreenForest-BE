const express = require("express")
const router = express.Router()

// import Controllers
const parkCtrl = require("../controllers/park")

// routes
router.post("/", parkCtrl.addPark)

// Route to get all parks
router.get("/", parkCtrl.getAllParks)

// Route to get all parks
router.get("/parks/details", parkCtrl.getParkGames)

module.exports = router
