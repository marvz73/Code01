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
	router.param('projectId', /^\d+$/);

	router.route('/')
		.post( 
	  		function(req, res, next) {
	  			req.body.AccountId = req.params.accountId;
	  			req.body.UserId = req.user.id;
	  			models.Account.find(req.params.accountId).then(function(account) {
					if(account){
						models.User.find(req.user.id).then(function(user) {
							if(user){
								user.hasAccount(account).then(function(result){
									if(result){
										models.Project.create(req.body).then(function(project) {
											res.json({
												msg : res.__("project.success.create"),
												data : project
											});
											io.of('/' + req.params.accountId).emit('projectCreate', project)
										})
									}
									else
										res.status(404).json({
											msg : res.__("project.fail.create"),
											data : null
										});
								})
							}else{
						  		res.status(404).json({
									msg : res.__("project.fail.create"),
									data : null
								});
						  	}
						})						
					}else{
				  		res.status(404).json({
							msg : res.__("project.fail.create"),
							data : null
						});
				  	}
				})
	  		}
	  	)

	router.route('/:projectId')
		.get( 
	  		function(req, res, next) {
	  			models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] }).then(function(project) {
					if(project){
						models.Account.find(req.params.accountId).then(function(account) {
							if(account){
								models.User.find(req.user.id).then(function(user) {
									if(user){
										user.hasAccount(account).then(function(result){
											if(result)
												res.json({
													msg : res.__("project.success.fetch"),
													data : project
												});
											else
												res.status(404).json({
													msg : res.__("project.fail.fetch"),
													data : null
												});
										})
									}else{
								  		res.status(404).json({
											msg : res.__("project.fail.fetch"),
											data : null
										});
								  	}
								})						
							}else{
						  		res.status(404).json({
									msg : res.__("project.fail.fetch"),
									data : null
								});
						  	}
						})					
					}else{
				  		res.status(404).json({
							msg : res.__("project.fail.fetch"),
							data : null
						});
				  	}
				})
	  		}
	  	)
	  	.post( 
	  		function(req, res, next) {
	  			models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] }).then(function(project) {
					if(project){
						models.Account.find(req.params.accountId).then(function(account) {
							if(account){
								models.User.find(req.user.id).then(function(user) {
									if(user){
										user.hasAccount(account).then(function(result){
											if(result){
												project.updateAttributes(req.body).then(function(project){
													res.json({
														msg : res.__("project.success.update"),
														data : project
													});	
													io.of('/' + req.params.accountId).emit('projectUpdate', project)
												})
											}
											else
												res.status(404).json({
													msg : res.__("project.fail.update"),
													data : null
												});
										})
									}else{
								  		res.status(404).json({
											msg : res.__("project.fail.update"),
											data : null
										});
								  	}
								})						
							}else{
						  		res.status(404).json({
									msg : res.__("project.fail.update"),
									data : null
								});
						  	}
						})					
					}else{
				  		res.status(404).json({
							msg : res.__("project.fail.update"),
							data : null
						});
				  	}
				})
	  		}
	  	)
	  	.delete( 
	  		function(req, res, next) {
	  			models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] }).then(function(project) {
					if(project){
						models.Account.find(req.params.accountId).then(function(account) {
							if(account){
								models.User.find(req.user.id).then(function(user) {
									if(user){
										user.hasAccount(account).then(function(result){
											if(result){
												project.destroy().then(function(project){
													res.json({
														msg : res.__("project.success.delete"),
														data : project
													})	
													io.of('/' + req.params.accountId).emit('projectDelete', project)
												})
											}
											else
												res.status(404).json({
													msg : res.__("project.fail.delete"),
													data : null
												});
										})
									}else{
								  		res.status(404).json({
											msg : res.__("project.fail.delete"),
											data : null
										});
								  	}
								})						
							}else{
						  		res.status(404).json({
									msg : res.__("project.fail.delete"),
									data : null
								});
						  	}
						})					
					}else{
				  		res.status(404).json({
							msg : res.__("project.fail.delete"),
							data : null
						});
				  	}
				})
	  		}
	  	)

	router.route('/:projectId/tasks')
		.get(
			function(req, res, next) {
				models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
					if(project){
						models.Account.find(req.params.accountId).then(function(account) {
							if(account){
								models.User.find(req.user.id).then(function(user) {
									if(user){
										user.hasAccount(account).then(function(result){
											if(result){
												project.getTasks({ include: [ models.User ]}).then(function(tasks){
													res.json({
														msg : "Return message here...",
														data : tasks
													});	
												})
											}
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
					}else{
				  		res.status(404).json({
							msg : "Return message here...",
							data : null
						});
				  	}
				})
	  		}
		)

	var task = require('./task.js')(models, io);
	router.use('/:projectId/task', task);


	return router;
}

