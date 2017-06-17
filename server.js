const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

// const nodemailer = require('nodemailer')
// const validator = require('express-validator')

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/views', express.static(path.join(__dirname, 'views')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use(bodyParser.urlencoded({
  extended: false
}))

// email -------------------------------------------------------------
/*
app.use(validator())

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
  res.render('index')
})

const server = app.listen(process.env.PORT || 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
