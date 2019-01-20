const express = require('express');
const fs = require('fs');
const app = express();
let config = require('./config');
let bodyParser = require('body-parser')

global.config = config;
global.app = app;
global.express = express;
global.path = require('path');

const PORT = process.env.PORT || config.port; //listen heroku port

app.use('/public', express.static('introduceSite/public'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.enable('trust proxy'); //for heroku
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

let profile = require('./routing/profile');
let projects = require('./routing/projects');
let teams = require('./routing/teams');
let contacts = require('./routing/contacts');
let pdf = require('./routing/PDFVersion');
let WisdomPage = require('./routing/WisdomPage');

//let hobbies = require('./routing/hobbies');

app.use('/', profile);
app.use('/profile', profile);
app.use('/projects', projects);
app.use('/teams', teams);
app.use('/contacts', contacts);
app.use('/pdf', pdf);
app.use('/WisdomPage', WisdomPage);

//app.use('/hobbies', hobbies);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

let pdfBuilder = require('../introduceSite/routing/PDFBuilder');
pdfBuilder.build();



