var express = require('express');
var router = express.Router({mergeParams: true});


module.exports = function(models) {

	router.route('/')
		.post( 
	  		function(req, res, next) {
	  			req.body.AccountId = req.params.accountId;
	  			req.body.CreatedById = req.user.id;
	  			models.Account.find(req.params.accountId).then(function(account) {
					if(account){
						models.User.find(req.user.id).then(function(user) {
							if(user){
								user.hasAccount(account).then(function(result){
									if(result){
										models.Project.create(req.body).then(function(project) {
											res.json({
												msg : "Return message here...",
												data : project
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
	  		}
	  	)

	router.route('/:projectId')
		.get( 
	  		function(req, res, next) {
	  			models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
					if(project){
						models.Account.find(req.params.accountId).then(function(account) {
							if(account){
								models.User.find(req.user.id).then(function(user) {
									if(user){
										user.hasAccount(account).then(function(result){
											if(result)
												res.json({
													msg : "Return message here...",
													data : project
												});
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
	  	.post( 
	  		function(req, res, next) {
	  			models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
					if(project){
						models.Account.find(req.params.accountId).then(function(account) {
							if(account){
								models.User.find(req.user.id).then(function(user) {
									if(user){
										user.hasAccount(account).then(function(result){
											if(result){
												project.updateAttributes(req.body).then(function(project){
													res.json({
														msg : "Return message here...",
														data : project
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
	  	.delete( 
	  		function(req, res, next) {
	  			models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
					if(project){
						models.Account.find(req.params.accountId).then(function(account) {
							if(account){
								models.User.find(req.user.id).then(function(user) {
									if(user){
										user.hasAccount(account).then(function(result){
											if(result){
												project.destroy().then(function(){
													res.json({
														msg : 'Record is destroyed!',
														data : account
													})	
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
					}else{
				  		res.status(404).json({
							msg : 'Record is not destroyed!',
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
												project.getTasks().then(function(tasks){
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

	var task = require('./task.js')(models);
	router.use('/:projectId/task', task);


	return router;
}

