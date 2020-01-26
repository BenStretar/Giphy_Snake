const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// return user gifs
router.get('/:id', (req, res)=>{
    let queryString = `SELECT * FROM "user_gifs" WHERE "user_id"=$1;`;
    const id = req.params.id
    pool.query(queryString, id).then(results =>{
        res.send(results.rows);
    }).catch(error => {
        console.log(`Error getting user_gifs from the database`, error);
        res.sendStatus(400)
    });
});

module.exports = router;