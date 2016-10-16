'use strict';
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const ENABLED_AUTH_STRATEGIES = [
  'local',
];

module.exports = function(app, db) {

  const dbStore = new SequelizeStore({
    db
  });

  const User = db.model('user');
  const passKey = {};
  dbStore.sync();

  // First, our session middleware will set/read sessions from the request.
  // Our sessions will get stored in Mongo using the same connection from
  // mongoose. Check out the sessions collection in your MongoCLI.
  app.use(session({
    secret: 'Mint is like sage but worse :)',
    store: dbStore,
    cookie: { maxAge: 360000 }, //6 mins
    resave: false,
    saveUninitialized: false
  }));

  // Initialize passport and also allow it to read
  // the request session information.
  app.use(passport.initialize());
  app.use(passport.session());

  // When we give a cookie to the browser, it is just the userId (encrypted with our secret).
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // When we receive a cookie from the browser, we use that id to set our req.user
  // to a user found in the database.
  passport.deserializeUser(function(id, done) {
    User.findById(id)
      .then(function(user) {
        if(user) user.pass = passKey.pass;
        done(null, user);
      })
      .catch(done);
  });

  // We provide a simple GET /session in order to get session information directly.
  // This is used by the browser application (Angular) to determine if a user is
  // logged in already.
  app.get('/session', function(req, res, next) {
    let err;
    if (req.user) {
      res.send({
        user: req.user.sanitize()
      });
    } else {
      err = new Error('No authenticated user.');
      err.status = 401;
      next(err);
    }
  });

  // Simple /logout route.
  app.get('/logout', function(req, res) {
    req.logout();
    res.status(200).end();
  });

  // Each strategy enabled gets registered.
  ENABLED_AUTH_STRATEGIES.forEach(function(strategyName) {
    require(path.join(__dirname, strategyName))(app, db, passKey);
  });

};
