const Response = require("../helpers/response")
const NoteModel = require("../models/NoteModel")

class NoteController {
    static addNote = async(req, res) => {
        const { 
            judul,
            isi
        } = req.body
        if(
            judul === undefined || 
            isi === undefined
        ) {
            Response.failed(res, 400, "All inputs must be filled!")
        }
        else {
            try {
                const createNote = await NoteModel.createNote({
                    judul,
                    isi
                })
                // IF createNote MODEL RETURNS SUCCESS CONFIRMATION
                if(createNote) {
                    Response.success(res, createNote.message, createNote.data)
                }
            }
            catch(err) {
                Response.failed(res, 500, err.message)
            }
        }
    }

    static getAllNotes = async(req, res) => {
        const readAllNotes = await NoteModel.readAllNotes()
        if(readAllNotes) {
            Response.success(res, readAllNotes.message, readAllNotes.data)
        }
    }

    static changeNote = async(req, res) => {
        const noteId = req.params.id
        const {
            judul, 
            isi
        } = req.body
        if(
            judul === undefined || 
            isi === undefined
        ) {
            Response.failed(res, 400, "All inputs must be filled!")
        }
        else {
            try {
                const updateNote = await NoteModel.updateNote({
                    id: noteId,
                    judul,
                    isi
                })
                // IF updateNote MODEL RETURNS SUCCESS CONFIRMATION
                if(updateNote) {
                    Response.success(res, updateNote.message)
                }
            }
            catch(err) {
                Response.failed(res, 500, err.message)
            }
        }
    }

    static removeNote = async(req, res) => {
        const noteId = req.params.id
        try {
            const deleteNote = await NoteModel.deleteNote(noteId)
            if(deleteNote) {
                Response.success(res, deleteNote.message)
            }
        }
        catch(err) {
            Response.failed(res, 500, err.message)
        }
    }
}

module.exports = NoteController