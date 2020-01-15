const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

/**
 * GET route template
 */

 // get a random gif
router.get('/', (req, res) => {
    let apiKey = process.env.GIPHY_API_KEY;
    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        .then(response =>{
            res.send(response.data.data)
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