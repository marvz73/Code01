var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var join = Promise.join;

router.param(function(name, fn) {
  if (fn instanceof RegExp) {
    return function(req, res, next, val) {
      var captures;
      if (captures = fn.exec(String(val))) {
        req.params[name] = captures;
        next();
      } else {
        next('route');
      }
    }
  }
});

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dumingagebpls@gmail.com',
        pass: 'elguebpls'
    }
});


module.exports = function(models, io) {
	router.param('accountId', /^\d+$/);

	router.route('/')
		.get(
			function(req, res, next){
				models.Account.findAll().then(function(accounts) {
					res.json({
						accounts: accounts
					});
				})
			}
		)
		.post(
	  	// 	function(req, res, next) {
	  	// 		var userPromise  = models.User.find(parseInt(req.user.id));
	  	// 		var accountPromise = models.Account.create(req.body);

	  	// 		join(userPromise, accountPromise, function(user, account) {
	  	// 			if(user && account){
		  // 				return [ account, user.addAccount(account)]
		  // 			} else {
		  // 				return [ null, null]
		  // 			}
				// })
				// .spread(function(account, user){
				// 	var _response = {}
				// 	if(account && user){
				// 		_response.data =  	{
				// 								msg : res.__("account.success.create"),
				// 								data : account,
				// 								error : null
				// 							}
				// 		_response.status = 200;
				// 	} else {
				// 		_response.data =  	{
				// 								msg : res.__("account.fail.create"),
				// 								data : null,
				// 								error : null
				// 							}	
				// 		_response.status = 400;
				// 	}
				// 	return _response;
				// })
				// .then(function(_response){
				// 	res.status(_response.status).json(_response.data);
				// })
				// .error(function(e){
				// 	res.status(500).json({
				// 		msg : res.__("account.error.server"),
				// 		data : null,
				// 		error : e
				// 	});	
				// });
	  	// 	}
	  	)

	router.route('/:accountId')
		.get( 
	  		function(req, res, next) {
	  			models.Account.find(parseInt(req.params.accountId)).then(function(account){
  					res.json({
  						account: account
  					})
	  			})
	  		}
	  	)
	  	.post(
	  		function(req, res, next) {
	  			// models.Account.find(parseInt(req.params.accountId)).then(function(account){
	  			// 	return account.updateAttributes(req.body);
	  			// }).then(function(account){
	  			// 	res.json({
	  			// 		account: account
	  			// 	})
	  			// });
	  			console.log(req.body);
	  		}
	  	)
	  	.put(
	  		function(req, res, next) {
	  			models.Account.find(parseInt(req.params.accountId)).then(function(account){
	  				return account.updateAttributes(req.body.account);
	  			}).then(function(account){
	  				res.json({
	  					account: account
	  				})
	  			});
	  		}
	  	)
	  	.delete(
	  		function(req, res, next) {
	  			models.Account.find(parseInt(req.params.accountId)).then(function(account){
	  				return account.destroy();
	  			}).then(function(account){
	  				res.json({
	  					account: account
	  				})
	  			});
	  		}
	  	)

	router.route('/:accountId/projects')
		.get(
			function(req, res, next) {
				var userPromise  = models.User.find(parseInt(req.user.id));
	  			var accountPromise = models.Account.find(parseInt(req.params.accountId));

	  			join(userPromise, accountPromise, function(user, account) {
	  				if(user && account){
		  				return [account, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(account, result){
					if(account && result){
						return account.getProjects({ include: [ models.User ]})
					} else {
						return null
					}
				})
				.then(function(projects){
					var _response = {}
					if(projects){
						_response.data =  	{
												msg : res.__("project.success.fetch"),
												data : projects,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("project.fail.fetch"),
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
						msg : res.__("project.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
		)

	router.route('/:accountId/accountUsers')
		.get(
			function(req, res, next) {
				var userPromise  = models.User.find(parseInt(req.user.id));
	  			var accountPromise = models.Account.find(parseInt(req.params.accountId));

	  			join(userPromise, accountPromise, function(user, account) {
	  				if(user && account){
		  				return [account, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(account, result){
					if(account && result){
						return account.getAccountUsers({ include: [ models.User ]})
					} else {
						return null
					}
				})
				.then(function(accountUsers){
					var _response = {}
					if(accountUsers){
						_response.data =  	{
												msg : res.__("accountUser.success.fetch"),
												data : accountUsers,
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

	router.route('/:accountId/inviteUser')
		.post(
			function(req, res, next) {
				var userPromise  = models.User.find(parseInt(req.user.id));
	  			var accountPromise = models.Account.find(parseInt(req.params.accountId));

	  			join(userPromise, accountPromise, function(user, account) {
	  				if(user && account){
		  				return [account, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(account, result){
					if(account && result){
						return [account, models.User.findOrCreate({ where: {email: req.body.email}, defaults: req.body})]
					} else {
						return [ null, null, null]
					}
				})
				.spread(function(account, user) {
					account.addUser(user[0]);
					if(user[1] && user[0].get('token') != null){
                        var text = req.get('host') + '/verify/' + user[0].get('token', {raw: true});

                        transporter.sendMail({
                            from: 'dumingagebpls@gmail.com',
                            to: req.body.email,
                            subject: 'Account Invitation and User Verification',
                            text: text
                        });
                        return true;
            		} else if(user[1] == false) {
						transporter.sendMail({
                            from: 'dumingagebpls@gmail.com',
                            to: req.body.email,
                            subject: 'Account Invitation',
                            text: "You are invited to join to an organization."
                        });	
                        return true;				                    			
            		} else {
            			return null;
            		}
                })
				.then(function(result){
					var _response = {}
					if(result){
						_response.data =  	{
												msg : res.__("user.success.invite"),
												data : result,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("user.fail.invite"),
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
						msg : res.__("user.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
		)


	return router;
}

