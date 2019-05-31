const express = require('express');
const router= express.Router();
const Friends = require('../models/Friends');






//READ
router.get('/', (req,res) => {
    Friends.find({}, (err, foundFriends)=> {
        //console.log('hello', foundFriends);
        if (err){
            res.send(err)
        } else {
            res.render('index.ejs', {
                friends: foundFriends
            });
        }
    })
});



router.get("/:id/edit", function(req, res)
{
 Friends.findById(req.params.id, (err, editedFriend)=>{
   if (err){
     console.log(err);
   } else {
     res.render("edit.ejs", {
       friends: editedFriend,
       id: req.params.id
     });
   }
 })
});




//CREATE

router.post('/', (req,res) => {
    Friends.create(req.body, (err,madeFriend) => {
        if (err){
            res.send(err)
        }else{
            console.log(madeFriend)
            res.redirect('/friends')
        }
    })
});

router.get('/new',(req,res)=>{
    res.render('new.ejs')
})







//SHOW
router.get('/:id', (req, res) => {


    Friends.findOne({_id: req.params.id}, (err, foundFriend) => {
        if(err){
          res.send(err);
        } else {
            console.log(typeof foundFriend, 'foundFriend');
        }if(foundFriend != null){
  
                res.render('show.ejs', {
                  friends: foundFriend // this is how we inject js
                                              // variables into our template
                                              // inside of show.ejs
                                              // we have a variable called
                                              // fruit in show.ejs
                });
  
            } else {
              res.send('no friend found')
            }
    });

});    






//DELETE

router.delete('/:id', (req,res)=>{
    
    Friends.findByIdAndRemove({_id:req.params.id}, (err, deletedFriend)=>{
        if (err){
            res.send(err)
        }else {
            console.log(deletedFriend)
            res.redirect('/friends')
        }
    })
})










module.exports = router;