
// REQUIRE THE STUFF
const express = require('express');
const router = express.Router();
const Team = require('../models/team');



// NEW ROUTE
router.get('/new', (req, res) => {
    res.render('new.ejs')
});

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



// CREATE ROUTE

// DELETE ROUTE

// EDIT ROUTE

// UPDATE ROUTE

// SHOW ROUTE
router.get('/:id', (req, res) => {
    Team.findById(req.params.id, (error, returnedTeam) => {
        if (error) {
            console.log(error);
        } else {
            res.render('show.ejs', {
            team: returnedTeam,  
            teamName: returnedTeam.name,
            })
        }
    })
})



module.exports = router;