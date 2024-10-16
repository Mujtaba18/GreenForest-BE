const Park = require("../models/Park")
const multer = require("multer")
const path = require("path")

let filename;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/")
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    filename = Date.now() + ext; // Generate unique filename
    cb(null, filename);
  },
})

// Initialize multer
upload = multer({ storage: storage })

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
    const parkGames = await Park.findById(req.params.parkId)

    res.send(parkGames)
  } catch (error) {
    throw error
  }
}

exports.postNewPark = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    const { park_name, park_location, park_description } = req.body;

    let parkImage = null;
    if (req.file) {
      parkImage = req.file.filename; // Use the generated filename from multer
    }

    const newPark = new Park({
      park_name,
      park_location,
      park_description,
      park_image: parkImage,
      games: [],
    });

    await newPark.save();
    res.status(201).json(newPark); // Send a successful response with the created park
  } catch (error) {
    console.error("Error creating park:", error);
    res.status(500).json({ error: "Internal server error" });
  }
  };

  exports.updatePark = async (req, res) => {
    const { parkId } = req.params;
    const { park_name, park_location, park_description, games } = req.body;
  
    try {
      const updatedFields = {
        park_name,
        park_location,
        park_description,
        games,
      };
      
      if (req.file) {
        updatedFields.park_image = req.file.filename;
      }
      
      const updatedPark = await Park.findByIdAndUpdate(parkId, updatedFields, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedPark) {
        return res.status(404).json({ message: "Park not found" });
      }
  
      res.status(200).json(updatedPark);
    } catch (error) {
      res.status(500).json({ message: "Error updating park", error: error.message });
    }
  };

  exports.addGameToPark = async (req, res) => {
    try {
      const { parkId } = req.params;
      const park = await Park.findById(parkId);
  
      if (!park) {
        return res.status(404).json({ message: "Park not found" });
      }
  
      const gameData = {
        game_name: req.body.game_name,
        game_description: req.body.game_description,
        game_price: req.body.game_price,
        total_tickets: req.body.total_tickets,
        game_image: req.file ? `/uploads/${req.file.filename}` : null,
      };
  
      park.games.push(gameData);
      await park.save();
  
      res.status(201).json(gameData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getParkById = async (req, res) => {
    const { parkId } = req.params;
  
    try {
      const park = await Park.findById(parkId).populate("games"); 
      console.log("Get Park Data" + park)
      if (!park) {
        return res.status(404).json({ message: "Park not found" });
      }
  
      res.status(200).json(park);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving park", error: error.message });
    }
  };
  
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
