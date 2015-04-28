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
						res.json({
							msg : "Return message here...",
							data : users
						});
					else{
				  		res.status(404).json({
							msg : "Return message here...",
							data : null
						});
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
							res.json({
								msg : "Return message here...",
								data : accounts
							});
						})
					}else{
				  		res.status(404).json({
							msg : "Return message here...",
							data : null
						});
				  	}
				})
	  		}
		)


	return router;
}


function isAuthenticated(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.sendStatus(403);
}

function isNotAuthenticated(req, res, next) {
    if (!req.isAuthenticated())
        return next();

    res.redirect('/profile');
}