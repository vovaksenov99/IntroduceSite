const express        = require('express');
const path = require('path')
const app            = express();

const PORT = process.env.PORT || 5000;//listen heruku port or 500 if it localhost
app.use('/public',express.static('introduceSite/public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.get('/', function(req, res){
  res.render('index.twig', {
    message : "Hello World"
  });
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/projects', function(req, res){
  res.render('projects.twig', {
    message : "Hello World"
  });
});