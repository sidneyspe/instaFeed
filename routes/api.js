var express = require('express');
var https = require('https');
var router = express.Router();
var passport = require('passport');
const Instagram = require('node-instagram').default;

// Create a new instance.
const instagram = new Instagram({
  clientId: clientID,
  clientSecret: clientSecret,
  accessToken: token,
});

router.get('/api/media/', function(req, res, next) {

  instagram.get('users/self/media/recent', (err, response) => {
    if (err) {
      console.log(err);
    } else {
      var images = [];
      for (item in response.data){
        var imgURL = response.data[item].images.thumbnail.url;
        images.push(imgURL);
      }
      res.send(images);
    }
  });

});

router.get('/api/allmedia/', function(req, res, next) {
  instagram.get('users/self/media/recent', (err, response) => {
    if (err) {
      console.log(err);
    } else {
      var images = [];
      for (item in response.data){
        var imgURL = response.data[item].images.thumbnail.url;
        images.push(imgURL);
      }
      res.send(response.data);
    }
  });

});

module.exports = router;
