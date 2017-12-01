const express        = require('express');
const path = require('path')
const content = require('./public/myResource/content/content')
const app            = express();

const PORT = process.env.PORT || 5000;//listen heruku port or 500 if it localhost
app.use('/public',express.static('introduceSite/public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.get('/', function(req, res){
  res.render('index.twig', {
    randomIntroNum : getRandomArbitraryInt(0,2)

  });
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/projects', function(req, res){
  res.render('projects.twig', {
    randomIntroNum : getRandomArbitraryInt(0,2),
    content : "Projects"
    });
});

function getRandomArbitraryInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}