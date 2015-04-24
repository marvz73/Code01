var express = require('express');
var router = express.Router();

router.all('*', isAuthenticated)

module.exports = function(models) {

	var account = require('./account.js')(models);
	router.use('/account', account);

	var user = require('./user.js')(models);
	router.use('/user', user);

	router.route('/users')
		.get(
			function(req, res){
				models.User.findAll().then(function(users) {
					if(users)
						res.json(users);
					else{
				  		res.json(null);
				  	}
				})
			}
		)

	router.route('/accounts')
		.get(
			function(req, res, next) {
				models.User.find(req.user.id).then(function(user) {
					if(user){
						user.getAccounts().then(function(accounts){
							res.json(accounts)
						})
					}else{
				  		res.json(null);
				  	}
				})
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