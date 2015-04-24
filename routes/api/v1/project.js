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
	  			req.body.id = req.params.projectId;
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
	  	.delete( 
	  		function(req, res, next) {
	  			req.body.id = req.params.projectId;
	  			new dbmodel.Project({id: req.params.projectId}).destroy().then(function(project_model) {
	        		if(project_model){
	        				res.json(project_model.toJSON({shallow: true}));
	        		}
				  	else{
				  		res.json(null);
				  	}
				});
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

	  	// 		new dbmodel.Project({'id': req.params.projectId, accountId: req.params.accountId}).fetch({
	   //              withRelated: ['user', 'tasks']
	   //          }).then(function(project_model) {
	   //      		if(project_model){
	   //      			if(project_model.related('user').id == req.user.id)
	   //      				res.json( project_model.related('tasks'));
	   //      			else
	   //      				res.json(null);
	   //      		}
				//   	else{
				//   		res.json(null);
				//   	}
				// });
	  		}
		)

	var task = require('./task.js')(models);
	router.use('/:projectId/task', task);


	return router;
}

