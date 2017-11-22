const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

const PORT = 5000;
express()
  .get('/', function(req, res) {
	  res.send("Kek");
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))