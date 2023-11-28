const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/feedback', (req, res) => {
    pool.query(`SELECT * FROM "feedback" ORDER BY "date" DESC`).then((result) =>{
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

router.put('/feedback/:id', (req,res) => {
    let queryText = `UPDATE "feedback" SET "flagged" = NOT "flagged"
    WHERE "id" = $1;`;
    pool.query(queryText,[req.params.id]).then((result) =>{
        res.sendStatus(200);
        console.log("PUT to '/feedback'");
    })
    .catch((error) => {
        console.error(`Error in PUT to '/feedback'.`, error);
        alert("Error in PUT '/feedback'. See console.");
    })
})

router.delete('/feedback/:id', (req,res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id]).then((result) => {
        console.log(`DELETE at '/feedback/${req.params.id}'`);
        res.sendStatus(200);
    }).catch((error) => {
        console.error(`Error in DELETE '/feedback/:id'.`, error);
        res.sendStatus(500);
    })
})


// -----------------

// router.post('/questions', (req,res) => {
//     let queryText = `INSERT INTO "questions" ("question", "abbreviation", "required", "type")
//     VALUES ($1, $2, $3, $4);`;

//     pool.query(queryText,[req.body.question, req.body.abbreviation, req.body.required, req.body.type]).then(() =>{
//         console.log("first added");
//         res.sendStatus(201);
//     })
//     .catch((error) => {
//         console.error(`Error in POST to '/questions'.`, error);
//         alert("Error in POST '/questions'. See console.");
//     })

//     if (req.body.type == "text"){
//         queryText = `ALTER TABLE "feedback"
//         ADD COLUMN $1 TEXT;`;
//     }
//     else if (req.body.type == "rating"){
//         queryText = `ALTER TABLE "feedback"
//         ADD COLUMN "$1" INT;`;
//     }
//     pool.query(queryText,[req.body.abbreviation]).then(()=>{
//         console.log("Question added");
//         res.sendStatus(201);
//     })
//     .catch((error) => {
//         console.error(`Error in POST to '/questions'.`, error);
//         alert("Error in POST '/questions'. See console.");
//     })
// })

router.get('/questions', (req,res) => {
    pool.query(`SELECT * FROM "questions"`).then((result) =>{
        res.send(result.rows);
        console.log("GET from '/questions'");
    })
    .catch((error) => {
        console.error(`Error in GET '/questions'. DB query failed`, error);
        alert(`Error in GET '/questions'. See console.`);
        res.sendStatus(500);
    })
})

// router.delete('/questions/:id', (req,res) => {
//     pool.query('DELETE FROM "questions" WHERE id=$1;', [req.params.id]).then((result) => {
//         console.log(`DELETE at '/questions/${req.params.id}'`);
//         res.sendStatus(200);
//     })
//     .catch((error) => {
//         console.error(`Error in DELETE '/questions/:id'.`, error);
//         res.sendStatus(500);
//     })
// })

// router.delete('/questions/abbrev/:abbrev',(req,res) => {
//     pool.query('ALTER TABLE "feedback" DROP COLUMN "$1" CASCADE;',[req.params.abbrev]).then((result) =>{
//         console.log(`DELETE at '/questions/abbrev/${req.params.abbrev}'`);
//         res.sendStatus(200);
//     })
//     .catch((error) => {
//         console.error(`Error in DELETE '/questions/abbrev/:abbrev'.`, error);
//         res.sendStatus(500);
//     })
// })

module.exports = router;