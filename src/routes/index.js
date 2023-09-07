const router = require("express").Router()
const NoteController = require("../controllers/NoteController")

router.post("/notes", NoteController.addNote)
router.get("/notes", NoteController.getAllNotes)
router.put("/notes/:id", NoteController.changeNote)
router.delete("/notes/:id", NoteController.removeNote)

module.exports = router