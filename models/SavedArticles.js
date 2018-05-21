const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const SavedArticles = new Schema({
    article: [{
        type: Schema.Types.ObjectId, 
        ref: 'Article'
    }],

    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]

    });

const SavedArticle = mongoose.model("SavedArticle", SavedArticles);

module.exports = SavedArticle;

   