var express = require('express');
var router = express.Router();

module.exports = function(passport) {

  router.post('/login', function(req, res, next) {
    console.log("inside login route");
      passport.authenticate('login', function(err, user, info) {
        if(err) {console.log(err);}
           if (user) {
            return res.status(200).json({
              message: "success"
            });
          } else {
            return res.status(500).json({
              message: 'Invalid User'
            });
          }
      })(req, res, next);
  });
  return router;
}
