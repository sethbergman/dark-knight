const express = require('express');
const favicon = require('serve-favicon');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const $ = require('jquery');
const port = process.env.PORT || 5000;
const http = require('http');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(favicon(__dirname + '/favicon.ico'));
app.use('/assets', express.static(__dirname + '/assets'));

app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(validator());

/*
app.post('/send', function(req, res) {
  req.checkBody("user_email", "Enter a valid email address.").isEmail();
  req.checkBody("user_email", "Enter a valid email address.");
  req.checkBody('textarea1').notEmpty()
  req.checkBody('name').notEmpty()
  let errors = req.validationErrors();
  if (errors) {
    res.send(errors);
    return;
  } else {
    // normal processing here
    res.redirect('/thank-you');
  }
});
*/

// application -------------------------------------------------------------
app.get('*', function (req, res) {
		res.sendFile(__dirname + '/views/index.html');
});

const server = app.listen(process.env.PORT || 5000, function () {
	console.log('Server running at http://0.0.0.0:' + server.address().port)
});
