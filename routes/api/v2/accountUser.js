var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var join = Promise.join;

module.exports = function(models, io) {

	router.route('/:userId')
		.get( 
			function(req, res, next) {
				var userPromise  = models.User.find(parseInt(req.user.id));
	  			var accountPromise = models.Account.find(parseInt(req.params.accountId));
	  			var accountUserPromise = models.AccountUser.find({ where: {'UserId': req.params.userId, 'AccountId': req.params.accountId} });

	  			join(userPromise, accountPromise, accountUserPromise, function(user, account, accountUser) {
	  				if(user && account && accountUser){
		  				return [accountUser, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(accountUser, result){
					var _response = {}
					if(accountUser && result){
						_response.data =  	{
												msg : res.__("accountUser.success.fetch"),
												data : accountUser,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("accountUser.fail.fetch"),
												data : null,
												error : null
											}	
						_response.status = 400;
					}
					return _response;
				})
				.then(function(_response){
					res.status(_response.status).json(_response.data);
				})
				.error(function(e){
					res.status(500).json({
						msg : res.__("accountUser.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
	  	)
	  	.post( 
			function(req, res, next) {
				var userPromise  = models.User.find(parseInt(req.user.id));
	  			var accountPromise = models.Account.find(parseInt(req.params.accountId));
	  			var accountUserPromise = models.AccountUser.find({ where: {'UserId': req.params.userId, 'AccountId': req.params.accountId} });

	  			join(userPromise, accountPromise, accountUserPromise, function(user, account, accountUser) {
	  				if(user && account && accountUser){
		  				return [accountUser, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(accountUser, result){
					if(accountUser && result){
						return accountUser.updateAttributes(req.body)
					} else {
						return null;
					}
				})
				.then(function(accountUser){
					var _response = {}
					if(accountUser){
						_response.data =  	{
												msg : res.__("accountUser.success.update"),
												data : accountUser,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("accountUser.fail.update"),
												data : null,
												error : null
											}	
						_response.status = 400;
					}
					return _response;
				})
				.then(function(_response){
					res.status(_response.status).json(_response.data);
				})
				.error(function(e){
					res.status(500).json({
						msg : res.__("accountUser.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
	  	)
	  	.delete( 
			function(req, res, next) {
				var userPromise  = models.User.find(parseInt(req.user.id));
	  			var accountPromise = models.Account.find(parseInt(req.params.accountId));
	  			var accountUserPromise = models.AccountUser.find({ where: {'UserId': req.params.userId, 'AccountId': req.params.accountId} });

	  			join(userPromise, accountPromise, accountUserPromise, function(user, account, accountUser) {
	  				if(user && account && accountUser){
		  				return [accountUser, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(accountUser, result){
					if(accountUser && result){
						return accountUser.destroy()
					} else {
						return null;
					}
				})
				.then(function(accountUser){
					var _response = {}
					if(accountUser){
						_response.data =  	{
												msg : res.__("accountUser.success.delete"),
												data : accountUser,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("accountUser.fail.delete"),
												data : null,
												error : null
											}	
						_response.status = 400;
					}
					return _response;
				})
				.then(function(_response){
					res.status(_response.status).json(_response.data);
				})
				.error(function(e){
					res.status(500).json({
						msg : res.__("accountUser.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
	  	)

	return router;
}

