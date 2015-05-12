var models  = require('../models');
var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dumingagebpls@gmail.com',
        pass: 'elguebpls'
    }
});

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

module.exports = function(passport, io) {

	/* GET home page. */
	router.get('/', function(req, res) {
		res.render('index', {
		  title: 'Express'
		});
	});

	router.route('/login')
	        .get( 
	        	isNotAuthenticated, 
	            function(req, res){
	                res.render('login', { title: 'Express' });
	            }
	        )
	        .post(
	            passport.authenticate('local-login', {
	                successRedirect : '/initialize', // redirect to the secure profile section
	                failureRedirect : '/login', // redirect back to the signup page if there is an error
	                failureFlash : true // allow flash messages
	            })
	        )

	router.route('/signup')
        .get( 
        	isNotAuthenticated, 
            function(req, res){
                res.render('signup', { title: 'Express' });
            }
        )
        .post( 
            function(req, res){

				models.User.findOrCreate({ where: {email: req.body.email}, defaults: req.body})
				.spread(function(user, created) {
					if(created){
						var text = req.get('host') + '/verify/' + user.get('token');

                        transporter.sendMail({
                            from: 'dumingagebpls@gmail.com',
                            to: req.body.email,
                            subject: 'User Verification',
                            text: text
                        });

                        res.send('Thank You!');

                    } else {
                        req.flash('signupMessage', 'That email is already taken.')
                        res.redirect('/signup');
                    }
                })
            }
        )
    
    // render the user verification
    router.route('/verify/:token')
        .get(
            function(req, res){
                models.User.find({ where: {token: req.params.token} }).then(function(user_model) {
                    if(user_model){
                        res.render('verify', { title: 'Express' });
                    }
                    else
                        res.send('Unknown Token!');

                }); 
            }
        )
        .post(
            function(req, res){
                models.User.find({ where: {token: req.params.token} }).then(function(user_model) {
                    if(user_model){

                        req.body.verified = true;
                        req.body.token = '';
                        req.body.password = encrypt(req.body.password);

                        user_model.set(req.body).save().then(function(user_model){
                            models.Account.create({name: 'Personal', description: 'My Personal Description'}).then(function(account_model) {
                                if(account_model){
                                    account_model.addUser(user_model);

                                    console.log(user_model.toJSON())
                                    res.redirect('/login');
                                }
                            });                     
                        })

                    }
                    else
                        res.send('Unknown Token!');
                }); 
            }
        )

    router.route('/forgot-password')
        .get( 
            function(req, res){
                res.render('forgot-password', { title: 'Express' });
            }
        )
        .post( 
            function(req, res){
                models.User.find({ where: {email: req.body.email} }).then(function(user_model) {
                    if(user_model){
                        var token = uuid.v4();
                        user_model.set({token: token}).save().then(function(user_model){ 
                            var text = req.get('host') + '/reset-password/' + token;

                            transporter.sendMail({
                                from: 'dumingagebpls@gmail.com',
                                to: req.body.email,
                                subject: 'Reset Password',
                                text: text
                            });

                            res.send('Please check email!.');                   
                        })

                    }
                    else
                        res.send('No email found!');

                }); 
            }
        )

    router.route('/reset-password/:token')
        .get( 
            function(req, res){
                models.User.find({ where: {token: req.params.token} }).then(function(user_model) {
                    if(user_model){
                        res.render('reset-password', { title: 'Express' });
                    }
                    else
                        res.send('Unknown Token!');
                }); 
            }
        )
        .post( 
            function(req, res){
                models.User.find({ where: {token: req.params.token} }).then(function(user_model) {
                    if(user_model){
                        var passwordHash = encrypt(req.body.password);

                        user_model.set({verified: true, token: "", password: passwordHash}).save().then(function(user_model){ 
                            res.redirect('/login');                 
                        })
                    }
                    else
                        res.send('Unknown Token!');

                });
            }
        )

    router.get('/profile', isAuthenticated, function(req, res, next) {
        res.render('profile', { title: 'Express', user : req.user });
    });

    router.get('/home/:namespace', isAuthenticated, function(req, res, next) {

        if (!io.nsps["/"+req.params.namespace]) {

            io.of("/"+req.params.namespace)
            .on('connection', function (socket) {
                socket.on('switchRoom', function(room){
                    socket.join(room);
                })

                socket.on('chat', function(data){
                    console.log('custom namespace', data)
                })

            });

        }

        models.User.find( { where: {id: req.user.id}, include: [models.Account] } ).then(function(user) {
            if(user){
                models.Account.find(req.params.namespace).then(function(account) {
                    user.hasAccount(account).then(function(result){
                        if(result){
                            res.render('home', { 
                                title: 'Express', 
                                user : req.user, 
                                bootstrap: user, 
                                namespace: "/"+req.params.namespace, 
                                baseUrl: req.get('host')
                            });
                        }else{
                            res.sendStatus(403);
                        }
                    })
                })
            }

        });
    });

    router.get('/initialize', isAuthenticated, function(req, res, next) {

        models.User.find( { where: {id: req.user.id}, include: [models.Account] } ).then(function(user_model) {
            if(user_model){
                console.dir(user_model.get('Accounts')[0].get('id'))
                res.redirect('/home/' + user_model.get('Accounts')[0].get('id'));
            }

        });

    });

    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    router.route('/upload')
        .get( 
            function(req, res){
                res.render('upload', { title: 'Express' });
            }
        )
        .post( 
            function(req, res) {
                console.log(req.files);
                res.render('upload', { title: 'Express' });
            }
        )

	return router;

}


function isAuthenticated(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

function isNotAuthenticated(req, res, next) {
    if (!req.isAuthenticated())
        return next();
    res.redirect('/profile');
}