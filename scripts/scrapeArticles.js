const axios = require('axios');
const cheerio = require('cheerio');

const storiesObject = {}; 


axios("https://www.nytimes.com/section/world")
.then(text => {
   
    const $ = cheerio.load(text.data);
    
    let headlines = $('.story-menu .story .story-body .headline').text();
    headlines = headlines.split('\n').map(item=> item.trim()).filter(item => item != "");

    let summaries = $('.story-menu .story .story-body .summary').map((i, el) =>  $(el).text()).get()

    let byline = $('.story-menu .story .story-body .byline').map((i, el) => $(el).text().trim()).get();
    let timeStamps = $('.story-menu .story .story-body .byline .freshness time').map((i, el) => $(el).data('utc-timestamp')).get();

    for(let i = 0; i < headlines.length; i++) {
        storiesObject[i] = {
            headline: headlines[i],
            summary: summaries[i],
            author: byline[i],
            timeStamps: timeStamps[i]
        }

    }

    console.log(storiesObject)
 
})
.catch(err =>console.log(err));
