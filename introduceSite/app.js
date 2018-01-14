const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const request = require('request');
let config = require('./config');

global.app = app;
global.express = express;

const PORT = process.env.PORT || 5000;//listen heroku port or 5000 if it localhost
app.use('/public', express.static('introduceSite/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

let profile = require('./routing/profile');
let projects = require('./routing/projects');
let teams = require('./routing/teams');
let contacts = require('./routing/contacts');

app.use('/', profile);
app.use('/profile', profile);
app.use('/projects', projects);
app.use('/teams', teams);
app.use('/contacts', contacts);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

global.config = config;