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
    try {
      const { parkId } = req.params;
      const { park_name, park_location, park_description } = req.body;
  
      let updatedData = {
        park_name,
        park_location,
        park_description,
      };
  
      // If a new image is uploaded, update the image path
      if (req.file) {
        updatedData.park_image = filename;
      }
  
      const updatedPark = await Park.findByIdAndUpdate(parkId, updatedData, { new: true, runValidators: true });
  
      if (!updatedPark) {
        return res.status(404).json({ message: "Park not found" });
      }
  
      res.status(200).json(updatedPark);
    } catch (error) {
      console.error("Error updating park:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
