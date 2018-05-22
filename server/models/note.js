const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const NoteSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    articleId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;

