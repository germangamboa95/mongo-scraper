const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ArticleSchema = new Schema({
    headline: {
        type: String,
        required: true,
        
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    timeStamps: { 
        type: Date, 
        required: true
    }
     
}); 
 
const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;

