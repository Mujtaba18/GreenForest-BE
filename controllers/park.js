const Park = require("../models/Park")

exports.addPark = async (req, res) => {
  try {
    const newPark = new Park(req.body)
    await newPark.save()
    res.send(newPark)
  } catch (error) {
    throw error
  }
}

// get all parks
exports.getAllParks = async (req, res) => {
  try {
    const parks = await Park.find()
    res.send(parks)
  } catch (error) {
    throw error
  }
}

// Get park game

exports.getParkGames = async (req, res) => {
  try {
    const parkGames = await Park.findById(req.params.parkId) // Corrected parameter

    res.send(parkGames)
  } catch (error) {
    throw error
  }
}

// Delete park game

exports.deleteParkGame = async (req, res) => {
  // get the parkID and gameID form req.params
  const { parkId, gameId } = req.params
  try {
    // find the park
    const park = await Park.findById(parkId)

    //  create new arr that have the game to be deleted
    park.games = park.games.filter((game) => game._id.toString() !== gameId)

    await park.save()
    res.status(200).send("Game deleted successfully")
  } catch (error) {
    throw error
  }
}
