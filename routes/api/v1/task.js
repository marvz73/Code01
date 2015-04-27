var express = require('express');
var router = express.Router({mergeParams: true});


module.exports = function(models) {

	router.route('/')
		.post( 
	  		function(req, res, next) {
	  			req.body.ProjectId = req.params.projectId;
	  			req.body.CreatedById = req.user.id;
	  			models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
					if(project){
						models.Account.find(req.params.accountId).then(function(account) {
							if(account){
								models.User.find(req.user.id).then(function(user) {
									if(user){
										user.hasAccount(account).then(function(result){
											if(result){
												models.Task.create(req.body).then(function(task) {
													res.json(task)	
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

	router.route('/:taskId')
		.get( 
	  		function(req, res, next) {
	  			models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId} }).then(function(task) {
					if(task){
						models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
							if(project){
								models.Account.find(req.params.accountId).then(function(account) {
									if(account){
										account.hasProject(project).then(function(result){
											models.User.find(req.user.id).then(function(user) {
												if(user){
													user.hasAccount(account).then(function(result){
														if(result)
															res.json(task)	
														else
															res.json(null);
													})
												}else{
											  		res.json(null);
											  	}
											})
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
	  			models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId} }).then(function(task) {
					if(task){
						models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
							if(project){
								models.Account.find(req.params.accountId).then(function(account) {
									if(account){
										account.hasProject(project).then(function(result){
											models.User.find(req.user.id).then(function(user) {
												if(user){
													user.hasAccount(account).then(function(result){
														if(result)
															task.updateAttributes(req.body).then(function(task){
																res.json(task);
															})
														else
															res.json(null);
													})
												}else{
											  		res.json(null);
											  	}
											})
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
	  			models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId} }).then(function(task) {
					if(task){
						models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
							if(project){
								models.Account.find(req.params.accountId).then(function(account) {
									if(account){
										account.hasProject(project).then(function(result){
											models.User.find(req.user.id).then(function(user) {
												if(user){
													user.hasAccount(account).then(function(result){
														if(result)
															task.destroy().then(function(){
																res.send('Record is destroyed!')
															})
														else
															res.send('Record is not destroyed!')
													})
												}else{
											  		res.send('Record is not destroyed!')
											  	}
											})
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

	router.route('/:taskId/histories')
		.get(
			function(req, res, next){
				models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId} }).then(function(task) {
					if(task){
						models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
							if(project){
								models.Account.find(req.params.accountId).then(function(account) {
									if(account){
										account.hasProject(project).then(function(result){
											models.User.find(req.user.id).then(function(user) {
												if(user){
													user.hasAccount(account).then(function(result){
														if(result){
															task.getTaskHistories().then(function(histories){
																res.json(histories)	
															})
														}
														else
															res.json(null);
													})
												}else{
											  		res.json(null);
											  	}
											})
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

	router.route('/:taskId/comments')
		.get(
			function(req, res, next){
				models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId} }).then(function(task) {
					if(task){
						models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
							if(project){
								models.Account.find(req.params.accountId).then(function(account) {
									if(account){
										account.hasProject(project).then(function(result){
											models.User.find(req.user.id).then(function(user) {
												if(user){
													user.hasAccount(account).then(function(result){
														if(result){
															task.getTaskComments().then(function(comments){
																res.json(comments)	
															})
														}
														else
															res.json(null);
													})
												}else{
											  		res.json(null);
											  	}
											})
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

	var history = require('./taskHistory.js')(models);
	router.use('/:taskId/history', history);

	var taskComment = require('./taskComment.js')(models);
	router.use('/:taskId/comment', taskComment);

	return router;
}

