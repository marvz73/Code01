var models  = require('../models');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'h3j5fcd35';
 
function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

// expose this function to our app using module.exports
module.exports = function() {
 
	// =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
 
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
		done(null, user.id);
    });
 
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        models.User.findById(id).then(function(user_model) {
            if(user_model){
                console.log(user_model.toJSON())
                return done(null, user_model.toJSON()); 
            }
            else
                return done(null, false); 

        });
    });


    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
 
    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },function(req, email, password, done) {

            var passwordHash = encrypt(password);
            var token = uuid.v4();

            console.log(req.body);

            models.User
              .findOrCreate({ where: {email: email}, defaults: {password: passwordHash, token: token}})
              .spread(function(user, created) {
                console.log(user.get({
                  plain: true
                }))
                console.log(created)

                /*
                  {
                    username: 'sdepold',
                    job: 'Technical Lead JavaScript',
                    id: 1,
                    createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
                    updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
                  }
                  created: true
                */
              })

        })
    );

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
 
    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form
        	var passwordHash = encrypt(password);

            models.User.findOne({ where: {email: email, password: passwordHash, verified: true} }).then(function(user_model) {
                if(user_model){
                    console.log(user_model.toJSON())
                    return done(null, user_model.toJSON()); 
                }
                else
                    return done(null, false, req.flash('loginMessage', 'Invalid username or password.'));

            }); 
        })
    );

 
 	return passport;
};
