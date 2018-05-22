const db = require('../models/index');
const scrape = require('../scripts/scrapeArticles.js');



const Articles = {

    loadFresh: async function(req, res){

        let insterted = 0; 
        let writeErrors = 0; 
        let insertResults = {}

        try{
            const results = await scrape();
            const response = await db.Articles.insertMany(results,{ ordered: false }); 

        } 
        catch (err) {
            insterted = err.result.nInserted; 
            writeErrors = err.result.getWriteErrorCount();
        }

        insertResults.articles = await db.Articles.find({}, null, {sort: {timeStamps: -1}})
        insertResults.insterted = insterted;
        insertResults.writeErrors = writeErrors;
 
        res.json(insertResults); 

    }, 
    
    loadStale: async function(req, res) {
        res.json(await db.Articles.find({}, null, {sort: {timeStamps: -1}}));
    },

    saveOne: async function(req, res) {

        const articleId = req.body.article_id;

        let dbRes = await db.SavedArticle.findOneAndUpdate({}, { $push: {article: articleId}})

        // This is a bit of a hacky way to bootstrap the SavedArticle collection into existance... 

        if(!dbRes) {
            await db.SavedArticle.create({}); 
            dbRes = await db.SavedArticle.findOneAndUpdate({}, { $push: {article: articleId}})

        }
        res.json(dbRes);
    },

    removeOne: async function(req, res) {
        const articleId = req.body.article_id;
        dbRes = await db.SavedArticle.findOneAndUpdate({}, { $pull: {article: articleId}})
        res.json(dbRes)
    },

    loadSaved: async function(req, res) {
        const savedArts = await db.SavedArticle.find({}).populate(['article','notes']); 
        res.json(savedArts);
    }
}



 module.exports = Articles;



 


