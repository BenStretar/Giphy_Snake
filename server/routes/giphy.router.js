const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

/**
 * GET route template
 */

 // search for a gif
router.get('/search/:searchQuery', (req, res) => {
    let apiKey = process.env.GIPHY_API_KEY;
    console.log(req.params.searchQuery)
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${req.params.searchQuery}&limit12`)
        .then(response =>{
            searchResults = [];
            for (let item of response.data.data){
                searchResults.push({image_url: item.images.original.url, title: item.title})
            }
            res.send(searchResults)
        })
        .catch(error =>{
            console.log(`error getting a random gif`, error)
            res.sendStatus(500)//internal server error
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
//'/search/:searchQuery'