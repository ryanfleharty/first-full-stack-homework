const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const port = 3000
app.listen(port, () => {
  console.log(`listening to ${port}`);
})
