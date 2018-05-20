const axios = require("axios");
const cheerio = require("cheerio");



const scrape = function() {
  const storiesObject = [];
  return axios("https://www.nytimes.com/section/world").then(text => {
    const $ = cheerio.load(text.data);

    let headlines = $(".story-menu .story .story-body .headline").text();

    let url = $(".story-menu .story .story-body .headline a")
      .map((i, el) => {
        return $(el).attr("href");
      })
      .get();

    let urlExtra = $(".story-menu .story .story-body .story-link")
      .map((i, el) => {
        return $(el).attr("href");
      })
      .get();
    
    url.push(...urlExtra);
   
    headlines = headlines
      .split("\n")
      .map(item => item.trim())
      .filter(item => item != "");

    let summaries = $(".story-menu .story .story-body .summary")
      .map((i, el) => $(el).text())
      .get();

    let byline = $(".story-menu .story .story-body .byline")
      .map((i, el) =>
        $(el)
          .text()
          .trim()
      )
      .get();

    let timeStamps = $(".story-menu .story .story-body .byline .freshness time")
      .map((i, el) => {
        return $(el).data("utc-timestamp");
      })
      .get();

    timeStamps = timeStamps.map(item => {
      let temp = new Date(1000 * item);
      let arr = [];
      arr.push(temp.getMonth() + 1);
      arr.push(temp.getDate());
      arr.push(temp.getFullYear());

      return arr.join("-");
    });

    let extraStamps = $(".story-menu .story footer time")
      .map((i, el) => {
        return $(el).attr("datetime");
      })
      .get();

    timeStamps.push(...extraStamps);

    for (let i = 0; i < headlines.length; i++) {
      storiesObject.push({
        headline: headlines[i],
        link: url[i],
        summary: summaries[i],
        author: byline[i],
        timeStamps: timeStamps[i]
      });
    }
    console.log(storiesObject.length);
    return storiesObject;
  });
};


module.exports = scrape;
