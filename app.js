const express = require('express');
const path = require("path")
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use('/static', express.static('public'));
app.use(helmet());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port, () => {
  console.log(`DollDB Running on Port ${port}!`)
});