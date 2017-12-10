const express        = require('express');
const path = require('path')
const values = require('./public/myResource/content/values')
const fs = require('fs')
const app            = express();
var request = require('request');

const PORT = process.env.PORT || 5000;//listen heruku port or 5000 if it localhost
app.use('/public',express.static('introduceSite/public'));


app.set('views', path.join(__dirname, 'views'));

app.use(function (req,res,next) {
  if(typeof req.query.lang !== "undefined")
  {
      values.currentLanguage = req.query.lang;
  }
  next();
});

app.get('/contacts', function(req, res){
  res.render('contacts.twig', {
    myFullName : values.getValue("myFullName"),
    randomIntroNum : getRandomArbitraryInt(0,2),
    navbar: navBarParams(),
    contacts : values.getValue("contacts"),
  });
});

app.get('/projects', function(req, res){
  res.render('projects.twig', {
    randomIntroNum : getRandomArbitraryInt(0,2),
    navbar: navBarParams(),
    projects : values.getValue("projects"),
    inProgress: values.getValue("inProgress"),
  });
});
app.get('/', function(req, res){
  res.render('index.twig', {
    randomIntroNum : getRandomArbitraryInt(0,2),
    skills : values.getValue("skills"),
    developer : values.getValue("developer"),
    myDescribe : values.getValue("myDescribe"),
    developer : values.getValue("developer"),
    technologyStack : values.getValue("technologyStack"),
    navbar: navBarParams(),
    languageDescribe: languageDescribeParams(),
  });
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

function getRandomArbitraryInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


function navBarParams () {
  return  {
    myName : values.getValue("myName"),
    main : values.getValue("main"),
    teams : values.getValue("teams"),
    projects : values.getValue("projects"),
    contacts : values.getValue("contacts"),
  }
}

function languageDescribeParams () {
  return  {
    csharpDescribe : values.getValue("csharpDescribe"),
    javaDescribe : values.getValue("javaDescribe"),
    kotlinDescribe : values.getValue("kotlinDescribe"),
    phpDescribe : values.getValue("phpDescribe"),
    sqlDescribe : values.getValue("sqlDescribe"),
    webDescribe : values.getValue("webDescribe"),
    cppDescribe : values.getValue("cppDescribe"),
  }
}

