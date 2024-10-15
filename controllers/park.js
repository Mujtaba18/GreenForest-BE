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