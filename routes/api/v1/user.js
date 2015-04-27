var express = require('express');
var router = express.Router({mergeParams: true});


module.exports = function(models) {

	router.route('/:userId')
		.get( 
			function(req, res, next) {
				models.User.find(req.params.userId).then(function(user) {
					if(user){
						res.json(user)
					}else{
				  		res.json(null);
				  	}
				})
	  		}
	  	)

	router.route('/:userId/accounts')
		.get( 
			function(req, res, next) {
				models.User.find(req.params.userId).then(function(user) {
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

	
	// var account = require('./account.js')(passport, dbmodel);
	// router.use('/account/:accountId', account);

	return router;
}

