const express = require("express")
const router = express.Router()
const multer = require("multer");
const path = require("path");

// import Controllers
const parkCtrl = require("../controllers/park")

let filename;

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    filename = Date.now() + ext; // Generate unique filename
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });


// Route to get all parks
router.get("/", parkCtrl.getAllParks)

// Route to get all parks
router.get("/games/:parkId", parkCtrl.getParkGames)
//

router.post('/', upload.single("park_image"), parkCtrl.postNewPark)

router.get("/:parkId", parkCtrl.getParkById);

router.post("/parks/:parkId/add-game", upload.single("game_image"), parkCtrl.addGameToPark);

router.put('/:parkId', upload.single("park_image"), parkCtrl.updatePark);



module.exports = router
