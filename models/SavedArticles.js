const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const SavedArticle = new Schema({
    article: [{
        type: Schema.Types.ObjectId, 
        ref: 'Article'
    }],
    
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]

    });

const Note = mongoose.model("SavedArticle", SavedArticle);

module.exports = SavedArticle;

