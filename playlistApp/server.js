const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
// require our db file
require('./db/db');

// Require our controller
const playlistController = require('./controllers/playlist');






// middleWare
// We want to make sure that we set this up
// before our routes, because we want the request's body
// to parsed (readable, won't be undefined anymore)

// middleware is set up with the method app.use()
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'))

app.use('/playlist', playlistController);


app.listen(3000, () => {
    console.log('app listening on port: ', 3000);
});
