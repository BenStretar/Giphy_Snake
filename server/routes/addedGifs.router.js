const express = require('express');
const pool = require('../modules/pool');

// return added gifs
router.get('/', (req, res)=>{
    let queryString = `SELECT * FROM "gifs";`;
    pool.query(queryString).then(results =>{
        res.send(results.rows);
    }).catch(error => {
        console.log(`Error getting gifs from the database`, error);
        res.sendStatus(400)
    });
});

// // add new gif
// router.post('/', (req, res) =>{

// })