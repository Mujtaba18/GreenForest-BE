const express = require("express")
const logger = require("morgan")
const cors = require("cors")
const path = require("path")

const PORT = process.env.PORT || 3001

const db = require("./db")

const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// parks routes
const parksRoutes = require("./routes/park")
app.use("/parks", parksRoutes)
//

app.use("/", (req, res) => {
  res.send(`Connected!`)
})

app.use((req, res, next) => {
  res.status(404).send("Route not found");
});


app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
