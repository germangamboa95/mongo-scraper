const db = require('../models/index');

const Notes = {
    addNote: function(req, res) {
        const note = req.body; 
        db.Notes.create(note)
        .then(result => db.SavedArticle.findOneAndUpdate({}, { $push: {notes: result.id}}, { new: true }))
        .then(result => res.json(result))
        .catch(err => res.json(err));
    },
    removeNote:function(req, res) {
        const noteId = req.params.id; 
     
        db.Notes.deleteOne({_id: noteId})
        .then(result => db.SavedArticle.findOneAndUpdate({}, { $pull: {notes: noteId}}, { new: true }))
        .then(result => res.json(result))
        .catch(err => res.json(err));
    }
}


module.exports = Notes;   