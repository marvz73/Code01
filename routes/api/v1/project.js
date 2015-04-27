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
											res.json(project)	
										})
									}
									else
										res.json(null);
								})
							}else{
						  		res.json(null);
						  	}
						})						
					}else{
				  		res.json(null);
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
												res.json(project)	
											else
												res.json(null);
										})
									}else{
								  		res.json(null);
								  	}
								})						
							}else{
						  		res.json(null);
						  	}
						})					
					}else{
				  		res.json(null);
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
													res.json(project)	
												})
											}
											else
												res.json(null);
										})
									}else{
								  		res.json(null);
								  	}
								})						
							}else{
						  		res.json(null);
						  	}
						})					
					}else{
				  		res.json(null);
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
													res.send('Record is destroyed!')
												})
											}
											else
												res.send('Record is not destroyed!')
										})
									}else{
								  		res.send('Record is not destroyed!')
								  	}
								})						
							}else{
						  		res.send('Record is not destroyed!')
						  	}
						})					
					}else{
				  		res.send('Record is not destroyed!')
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
													res.json(tasks)	
												})
											}
											else
												res.json(null);
										})
									}else{
								  		res.json(null);
								  	}
								})						
							}else{
						  		res.json(null);
						  	}
						})					
					}else{
				  		res.json(null);
				  	}
				})
	  		}
		)

	var task = require('./task.js')(models);
	router.use('/:projectId/task', task);


	return router;
}

