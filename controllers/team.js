
// REQUIRE THE STUFF
const express = require('express');
const router = express.Router();
const Team = require('../models/team');



// INDEX ROUTE
router.get('/', (req, res) => {
    Team.find({}, (error, allTeams) => {
        if(error){
            console.log(error);
        } else {
            res.render('index.ejs', {
                allTeams: allTeams
            })
        }
    })
});

// NEW ROUTE

// CREATE ROUTE

// DELETE ROUTE

// EDIT ROUTE

// UPDATE ROUTE

// SHOW ROUTE




module.exports = router;