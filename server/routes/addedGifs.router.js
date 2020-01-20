const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


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

// add a new favorite 
router.post('/', (req, res) => {
    console.log(req.body);
    const {image_url, title} = req.body;
    let queryString = `INSERT INTO "gifs" ("title", "url") VALUES ($1, $2);`;
  
    pool.query(queryString, [title ,image_url]).then(result=>{
      console.log('ADD RESULT',result);
      
      res.sendStatus(200);
    }).catch(error=>{
      res.sendStatus(400);
      console.log(error);    
    })
  });

  // delete a favorite
router.delete('/:id', (req, res) => {
    
    let queryString = `DELETE FROM "gifs" WHERE "id"=$1;`;
  
    //Query to dependant tables
    pool.query(queryString, [req.params.id]).then(result=>{
      
    }).catch(error=>{
      console.log('Error deleting favorites from database:',error);
      res.sendStatus(400);
    });
  });
  
  module.exports = router;