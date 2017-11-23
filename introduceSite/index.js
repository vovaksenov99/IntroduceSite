const express        = require('express');
const app            = express();

const PORT = process.env.PORT || 5000;
app.use('/public',express.static('introduceSite/public'));


app
  .get('/', function(req, res) {
	res.sendfile('introduceSite/index.html');
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));