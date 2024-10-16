const Park = require('../models/Park')

exports.getPark = async (req, res) => {
  try {
    const parks = await Park.find()
    res.status(200).res.json(parks)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving parks', error })
  }
}
exports.addGame = async (req, res) => {
  try {
    const park = await Park.findById(req.params.parkId)

    if (!park) {
      return res.status(404).json({ message: 'Park not found' })
    }

    const newGame = {
      game_name: req.body.game_name,
      game_description: req.body.game_description,
      game_price: req.body.game_price,
      game_image: req.body.game_image,
      total_tickets: req.body.total_tickets
    }

    park.games.push(newGame)
    await park.save()

    res.send({ message: 'Game added to park successfully', park })
  } catch (error) {
    res.status(500).json({ message: 'Error adding game to park', error })
  }
}
