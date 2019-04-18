
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
router.post('/', (req, res) => {
    Team.create(req.body, (error, newTeam) => {
        if (error){
            console.log(error)
        } else {
            console.log(newTeam);
            res.redirect('/team')
        }
    })
});


// DELETE ROUTE
router.delete('/:id', (req, res) => {
    Team.findByIdAndDelete(req.params.id, (error, deletedTeam) => {
        if (error){
            console.log(error)
        } else {
            console.log(deletedTeam)
            res.redirect('/team')
        }
    })
});
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