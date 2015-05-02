var express = require('express');
var router = express.Router({mergeParams: true});

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

	/*router.route('/')
		.post(
	  		function(req, res, next) {
	  			new dbmodel.Account(req.body).save().then(function(account_model) {
	        		if(account_model){
	        			res.json(account_model.toJSON({shallow: true}));

				  		console.dir(account_model.toJSON());
	        		}
				  	else{
				  		res.json(null);
				  		console.log("no data");
				  	}
				});
	  		}
	  	)*/

	router.route('/:accountId')
		.get( 
	  		function(req, res, next) {
	  			models.Account.find(req.params.accountId).then(function(account) {
					if(account){
						models.User.find(req.user.id).then(function(user) {
							if(user){
								user.hasAccount(account).then(function(result){
									if(result){
										res.json({
											msg : res.__("account.success.fetch"),
											data : account
										})	
									}else{
										res.status(404).json({
											msg : res.__("account.fail.fetch"),
											data : null
										});
									}
								})
							}else{
						  		res.status(404).json({
									msg : res.__("account.fail.fetch"),
									data : null
								});
						  	}
						})						
					}else{
				  		res.status(404).json({
							msg : res.__("account.fail.fetch"),
							data : null
						});
				  	}
				})
	  		}
	  	)
	  	.post(
	  		function(req, res, next) {
	  			models.Account.find(req.params.accountId).then(function(account) {
					if(account){
						models.User.find(req.user.id).then(function(user) {
							if(user){
								user.hasAccount(account).then(function(result){
									if(result){
										account.updateAttributes(req.body).then(function(account){
											if(account){
												res.json({
													msg : res.__("account.success.update"),
													data : account
												})	
												io.of('/' + req.params.accountId).emit('accountUpdate', account)
											}else
												res.status(404).json({
													msg : res.__("account.fail.update"),
													data : null
												});
										})
									}
									else{
										res.status(404).json({
											msg : res.__("account.fail.update"),
											data : null
										});
									}
								})
							}else{
						  		res.status(404).json({
									msg : res.__("account.fail.update"),
									data : null
								});
						  	}
						})						
					}else{
				  		res.status(404).json({
							msg : res.__("account.fail.update"),
							data : null
						});
				  	}
				})
	  		}
	  	)
	  	.delete(
	  		function(req, res, next) {
	  			models.Account.find(req.params.accountId).then(function(account) {
					if(account){
						models.User.find(req.user.id).then(function(user) {
							if(user){
								user.hasAccount(account).then(function(result){
									if(result){
										account.destroy().then(function(account){
											res.json({
												msg : res.__("account.success.delete"),
												data : account
											})	
											io.of('/' + req.params.accountId).emit('accountDelete', account)
										})
									}	
									else
										res.status(404).json({
											msg : res.__("account.fail.delete"),
											data : null
										});
								})
							}else{
						  		res.status(404).json({
									msg : res.__("account.fail.delete"),
									data : null
								});
						  	}
						})						
					}else{
				  		res.status(404).json({
							msg : res.__("account.fail.delete"),
							data : null
						});
				  	}
				})
	  		}
	  	)

	router.route('/:accountId/projects')
		.get(

			function(req, res, next) {
				models.Account.find(req.params.accountId).then(function(account) {
					if(account){
						models.User.find(req.user.id).then(function(user) {
							if(user){
								user.hasAccount(account).then(function(result){
									if(result)
										account.getProjects({ include: [ models.User ]}).then(function(projects){
											res.json({
												msg : "Return message here...",
												data : projects
											})	
										})
									else
										res.status(404).json({
											msg : "Return message here...",
											data : null
										});
								})
							}else{
						  		res.status(404).json({
									msg : "Return message here...",
									data : null
								});
						  	}
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

	router.route('/:accountId/accountUsers')
		.get(
			function(req, res, next) {
				models.Account.find(req.params.accountId).then(function(account) {
					if(account){
						models.User.find(req.user.id).then(function(user) {
							if(user){
								user.hasAccount(account).then(function(result){
									if(result)
										account.getAccountUsers().then(function(AccountUser){
											res.json({
												msg : "Return message here...",
												data : AccountUser
											})		
										})
									else
										res.status(404).json({
											msg : "Return message here...",
											data : null
										});
								})
							}else{
						  		res.status(404).json({
									msg : "Return message here...",
									data : null
								});
						  	}
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

	router.route('/:accountId/inviteUser')
		.post(
			function(req, res, next) {
				models.Account.find(req.params.accountId).then(function(account) {
					if(account){
						models.User.find(req.user.id).then(function(user) {
							if(user){
								user.hasAccount(account).then(function(result){
										console.log(req.body)
									if(result)
										models.User.findOrCreate({ where: {email: req.body.email}, defaults: req.body})
										.spread(function(user, created) {
											account.addUser(user).then(function(account){
												if(created || user.get('token') != null){
							                        var text = req.get('host') + '/verify/' + user.get('token');

							                        transporter.sendMail({
							                            from: 'dumingagebpls@gmail.com',
							                            to: req.body.email,
							                            subject: 'Account Invitation and User Verification',
							                            text: text
							                        });
					                    		} else {
													transporter.sendMail({
							                            from: 'dumingagebpls@gmail.com',
							                            to: req.body.email,
							                            subject: 'Account Invitation',
							                            text: "You are invited to join to an organization."
							                        });					                    			
					                    		}


						                        res.json({
													msg : "user invite success",
													data : null
												});
					                    	})
						                })
									else
										res.status(404).json({
											msg : "user invite fail",
											data : null
										});
								})
							}else{
						  		res.status(404).json({
									msg : "user invite fail",
									data : null
								});
						  	}
						})						
					}else{
				  		res.status(404).json({
							msg : "user invite fail",
							data : null
						});
				  	}
				})
	  		}
		)

	var project = require('./project.js')(models, io);
	router.use('/:accountId/project', project);

	var accountUser = require('./accountUser.js')(models, io);
	router.use('/:accountId/accountUser', accountUser);


	return router;
}

