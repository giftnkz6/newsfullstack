const express = require('express');
// cors
const cors = require('cors');
// port 
const port = parseInt(process.env.PORT) || 1800;
// Express app
const app = express();




app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});



// To query /v2/everything
// You must include at least one q, source, or domain
app.get('/', (req, res) => {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('7826b7d90f264dc189abac14ff4946c6');
    newsapi.v2.everything({
        // q: 'soccer',
        // sources: 'bbc-news,the-verge',
        // domains: 'bbc.co.uk, techcrunch.com',
        // from: '2023-03-25',
        // to: '2023-04-21',
        // language: 'en',
        // sortBy: 'relevancy',
        // page: 2
        sources: 'bbc-news,the-verge',
        q: 'wall street',
        //   category: 'business',
        language: 'en',
        //   country: 'us'
    }).then(response => {
        console.log(response.articles);
        res.send(response);
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
    }).catch((err) => {
        console.log(err)
    })

})


// Server is running
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});