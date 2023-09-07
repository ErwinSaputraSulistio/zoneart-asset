const express = require("express")
const cors = require("cors")
const routes = require("./src/routes")
const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)
app.listen(port, () => { console.log("Server is currently running on port " + port) })