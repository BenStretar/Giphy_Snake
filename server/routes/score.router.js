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
    let queryString = `INSERT INTO "game" ("gifs_collected") VALUES ($1);`;
    pool.query(queryString).then(results => {
        console.log('ADD SCORE', results);
        res.sendStatus(200)
    }).catch(error =>{
        res.sendStatus(400)
        console.log(`in score.router post..`, error)
    });
});

// delete from game table
router.delete('/:id', (req, res) =>{
    const id = req.params.id
    let queryString = `DELETE FROM "game" WHERE "id" = $1;`;
    pool.query(queryString, [id]).then(result=>{
        res.sendStatus(200)
    }).catch(error=>{
        console.log(`Error deleting a score from database: `, error);
        res.sendStatus(400);
    });
});

module.exports = router;