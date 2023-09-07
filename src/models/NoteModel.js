const db = require("../../db")

const notesSchema = new db.Schema(
    {
        judul: {
            type: String,
            required: true,
        },
        isi: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        collection: "notes"
    }
)

const notes = db.model("notes", notesSchema)

class NoteModel {
    static createNote = (data) => {
        return new Promise((resolve, reject) => {
            notes.create(data, (err, result) => {
                if(!err) {
                    resolve({
                        message: "[CREATE NOTE SUCCESS]",
                        data: result
                    })
                }
                else {
                    console.log(err)
                    reject({ message: "[CREATE NOTE FAILED]" })
                }
            })
        })
    }

    static readAllNotes = () => {
        return new Promise((resolve, reject) => {
            notes.find({}, (err, result) => {
                if(!err) {
                    resolve({
                        message: "[GET ALL NOTES COMPLETED]",
                        data: result
                    })
                }
                else {
                    reject({ message: "[GET ALL NOTES FAILED]" })
                }
            })
        })
    }

    static updateNote = (data) => {
        return new Promise((resolve, reject) => {
            notes.findOneAndUpdate({ _id: data.id }, data, (err, result) => {
                if(!err) {
                    resolve({ message: "[UPDATE NOTE COMPLETED]" })
                }
                else {
                    reject({ message: "[UPDATE NOTE FAILED]" })
                }
            })
        })
    }

    static deleteNote = (id) => {
        return new Promise((resolve, reject) => {
            notes.findOneAndDelete({ _id: id }, (err, result) => {
                if(!err) {
                    resolve({ message: "[DELETE NOTE SUCCESS]" })
                }
                else {
                    reject({ message: "[DELETE NOTE FAILED]" })
                }
            })
        })
    }
}

module.exports = NoteModel