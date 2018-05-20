const db = require('../models/index');
const scrape = require('../scripts/scrapeArticles.js');





const Articles = {
    init: async function(req, res){
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
        insertResults.articles = await db.Articles.find({})
        insertResults.insterted = insterted;
        insertResults.writeErrors = writeErrors;

        res.json(insertResults);

    },
    loadStale: async function(req, res) {

        res.json(await db.Articles.find({}));
        
    }
}



 module.exports = Articles;



 


