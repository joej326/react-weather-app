const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const massive = require('massive');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use(bodyParser.json());

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');



//*************************************************
app.get('/developers', function (req, res) {
  res.status(200).send('here are the developers')
  console.log('hereyou go');

})


app.get('/home', function (req, res) {
  res.send('This is the home!')
  console.log('it worked');
  req.session.joe = 20;
  console.log(req.session.joe);

})


app.listen(8033, function(){
  console.log('working');
});
