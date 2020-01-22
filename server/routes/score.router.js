const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// return added scores
router.get('/', (req, res)=>{
    let queryString = `SELECT * FROM "game";`;
    pool.query(queryString).then(results =>{
        res.send(results.rows);
    }).catch(error =>{
        console.log(`Error getting game stats from database..`, error)
        res.sendStatus(400)
    });
});

// add scores to game table
router.post('/', (req, res)=>{
    let queryString = `INSERT INTO "game" ("time_elapsed") VALUES ($1);`;
    pool.query(queryString).then(results => {
        console.log('ADD SCORE', results);
        res.sendStatus(200)
    }).catch(error =>{
        res.sendStatus(400)
        console.log(`in score.router post..`, error)
    });
});

// // delete from game table
// router.delete('/:id', (req, res) =>{

// })

module.exports = router;