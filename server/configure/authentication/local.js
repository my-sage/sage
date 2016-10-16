'use strict';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(app, db, passKey) {

  const User = db.model('user');

  // When passport.authenticate('local') is used, this function will receive
  // the email and password to run the actual authentication logic.
  const strategyFn = function(email, password, done) {
    User.findOne({
        where: {
          email: email
        }
      })
      .then(function(user) {
        // user.correctPassword is a method from the User schema.
        if (!user || !user.correctPassword(password)) {
          done(null, false);
        } else {
          // Properly authenticated.
          passKey.pass = password;
          done(null, user);
        }
      })
      .catch(done);
  };

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, strategyFn));

  // A POST /login route is created to handle login.
  app.post('/login', function(req, res, next) {


    const authCb = function(err, user) {

      if (err) return next(err);

      if (!user) {
        var error = new Error('Invalid login credentials.');
        error.status = 401;
        return next(error);
      }

      // req.logIn will establish our session.
      req.logIn(user, function(loginErr) {
        if (loginErr) return next(loginErr);
        // We respond with a response object that has user with _id and email.
        res.status(200).send({
          user: user.sanitize()
        });
      });

    };

    passport.authenticate('local', authCb)(req, res, next);

  });

  //A POST /signup route to handle local sign up
  app.post('/signup', function(req, res, next) {
    //Sanitize req.body
    const newUser = req.body;

    User.findAll()
      .spread(user => {
        if (user) {
          res.status(400).json('One Authorized user already exists');
        } else {
          User.create(newUser)
            .then(createdUser => {
              req.login(createdUser, function(loginErr) {
                if (loginErr) return next(loginErr);
                res.status(200).send({
                  user: createdUser.sanitize()
                });
              });
            })
            .catch(next);
        }
      })
  });

};
