const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/feedback', (req, res) => {
    pool.query(`SELECT * FROM "feedback"`).then((result) =>{
        res.send(result.rows);
        console.log("GET from '/feedback'");
    })
    .catch((error) => {
        console.error(`Error in GET '/feedback'. DB query failed`, error);
        alert(`Error in GET '/feedback'. See console.`);
        res.sendStatus(500);
    })
})

router.post('/feedback', (req,res) => {
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "grade", "comments")
    VALUES ($1, $2, $3, $4, $5)`;
    pool.query(queryText,[req.body[0]['rating'], req.body[1]['rating'], req.body[2]['rating'], req.body[3]['rating'], req.body[4]['rating']]).then(() =>{
        res.sendStatus(201);
        console.log("POST to '/feedback'");
    })
    .catch((error) => {
        console.error(`Error in POST to '/feedback'.`, error);
        alert("Error in POST '/feedback'. See console.");
    })
})

module.exports = router;