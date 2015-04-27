var express = require('express');
var router = express.Router({mergeParams: true});


module.exports = function(models) {

	router.route('/')
		.post( 
	  		function(req, res, next) {
	  			req.body.createdBy = req.user.id;
	  			new dbmodel.Project(req.body).save().then(function(project_model) {
	        		if(project_model){
	        			res.json(project_model.toJSON({shallow: true}));
	        		}
				  	else{
				  		res.json(null);
				  	}
				});
	  		}
	  	)

	router.route('/:projectId')
		.get( 
	  		function(req, res, next) {
	  			models.Project.find({ where: {'id': req.params.projectId, accountId: req.params.accountId} }).then(function(project) {
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
	  			models.Project.find({ where: {'id': req.params.projectId, accountId: req.params.accountId} }).then(function(project) {
					if(project){
						models.Account.find(req.params.accountId).then(function(account) {
							if(account){
								models.User.find(req.user.id).then(function(user) {
									if(user){
										user.hasAccount(account).then(function(result){
											if(result){
												project.updateAttributes(req.body).then(function(){
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
	  			models.Project.find({ where: {'id': req.params.projectId, accountId: req.params.accountId} }).then(function(project) {
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
				models.Project.find({ where: {'id': req.params.projectId, accountId: req.params.accountId} }).then(function(project) {
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

