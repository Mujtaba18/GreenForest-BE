const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
  game_name: { type: String, required: true },
  game_description: { type: String, required: true },
  game_price: { type: Number, required: true },
  game_image: { type: String, required: true },
  total_tickets: { type: Number, required: true },
})

const parkSchema = new mongoose.Schema({
  park_name: { type: String, required: true },
  park_location: { type: String, required: true },
  park_description: { type: String, required: true },
  park_image: { type: String, required: true },
  games: [gameSchema],
})

const Park = mongoose.model("Park", parkSchema)

module.exports = Park
