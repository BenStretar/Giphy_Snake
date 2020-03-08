const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// return added gifs
router.get('/', rejectUnauthenticated, (req, res)=>{
    let queryString = `SELECT * FROM "gifs";`;
    pool.query(queryString).then(results =>{
        res.send(results.rows);
    }).catch(error => {
        console.log(`Error getting gifs from the database`, error);
        res.sendStatus(400)
    });
});

// add a new favorite 
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);
    const {image_url, title} = req.body;
    let queryString = `INSERT INTO "gifs" ("title", "url") VALUES ($1, $2);`;
  
    pool.query(queryString, [title ,image_url]).then(result=>{
      console.log('ADD RESULT',result);
      
      res.sendStatus(200);
    }).catch(error=>{
      res.sendStatus(400);
      console.log(error);    
    });
  });

  // update image titles
  router.put('/:id', rejectUnauthenticated, (req, res)=>{
    console.log('req.body: ',req.body)
    console.log('id: ',req.params.id)
    const id = req.params.id
    let title = req.body.title
    let queryString = `UPDATE "gifs" SET "title"=$1 WHERE "id"=$2;`;
    pool.query(queryString, [title, id]).then(result=>{
      res.sendStatus(200)
    }).catch(error =>{
      console.log('Error updating titles in database', error)
      res.sendStatus(400)
    });
  });

  // delete a gif from the gif table
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id
    let queryString = `DELETE FROM "gifs" WHERE "id"=$1;`;
    pool.query(queryString, [id]).then(result=>{
      res.sendStatus(200);
    }).catch(error=>{
      console.log('Error deleting a gif from database: ',error);
      res.sendStatus(400);
    });
  });
  
  module.exports = router;