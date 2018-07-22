var express = require('express');
var https = require('https');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next) {

    // var codeJSON = JSON.parse(req.query.code);
    var token = req.query.token;

    try {
        var request = https.get("https://api.instagram.com/v1/users/self/?access_token=" + token, function(response) {
            // console.log(res);
            res.render('instagram', {
              message: JSON.parse(response)
            });
        }).on("error", function(error) {
            console.log(error.message);
            res.render('instagram', {
              message: error.message
            });
        });
    } catch(e) {
        console.log(e);
        res.render('instagram', {
          message: e
        });
    }


});

router.get('/feed', function(req, res, next) {
  res.render('feed', {
    
  });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', {
    message: req.flash('loginMessage')
  });
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/',
  failureFlash: true
}));

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.get('/instagram', function(req, res, next) {

  try {
      var request = https.get("/getUserID", function(response) {
          console.log(response);
          res.render('instagram', {
            message: JSON.parse(data)
          });
      }).on("error", function(error) {
          console.log(error.message);
          res.render('instagram', {
            message: error.message
          });
      });
  } catch(e) {
      console.log(e);
      res.render('instagram', {
        message: e
      });
  }



});


module.exports = router;
