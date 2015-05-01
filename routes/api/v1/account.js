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
											msg : "Return message here...",
											data : account
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
					}else{
				  		res.status(404).json({
							msg : "Return message here...",
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
													msg : "Return message here...",
													data : account
												})	
												io.of('/' + req.params.accountId).emit('accountUpdate', account)
											}else
												res.status(404).json({
													msg : "Return message here...",
													data : null
												});
										})
									}
									else{
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
					}else{
				  		res.status(404).json({
							msg : "Return message here...",
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
												msg : 'Record is destroyed!',
												data : account
											})	
											io.of('/' + req.params.accountId).emit('accountDelete', account)
										})
									}	
									else
										res.status(404).json({
											msg : 'Record is not destroyed!',
											data : null
										});
								})
							}else{
						  		res.status(404).json({
									msg : 'Record is not destroyed!',
									data : null
								});
						  	}
						})						
					}else{
				  		res.status(404).json({
							msg : 'Record is not destroyed!',
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

	var project = require('./project.js')(models, io);
	router.use('/:accountId/project', project);

	var accountUser = require('./accountUser.js')(models, io);
	router.use('/:accountId/accountUser', accountUser);


	return router;
}

