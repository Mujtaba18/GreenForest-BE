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

  exports.getParkById = async (req, res) => {
    const { parkId } = req.params;
  
    try {
      const park = await Park.findById(parkId).populate("games"); // Populate games if referenced
      if (!park) {
        return res.status(404).json({ message: "Park not found" });
      }
  
      res.status(200).json(park);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving park", error: error.message });
    }
  };

  exports.updatePark = async (req, res) => {
    const { parkId } = req.params;
    const { park_name, park_location, park_description, park_image, games } = req.body;
  
    try {
      const updatedPark = await Park.findByIdAndUpdate(
        parkId,
        {
          park_name,
          park_location,
          park_description,
          park_image,
          games, // Update games array
        },
        { new: true, runValidators: true } // Ensure validation is run
      );
  
      if (!updatedPark) {
        return res.status(404).json({ message: "Park not found" });
      }
  
      res.status(200).json(updatedPark);
    } catch (error) {
      res.status(500).json({ message: "Error updating park", error: error.message });
    }
  };
  
