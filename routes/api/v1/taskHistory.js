var express = require('express');
var router = express.Router({mergeParams: true});


module.exports = function(models) {

	router.route('/')
		.post(
			function(req, res, next){
				req.body.createdBy = req.user.id;
				new dbmodel.TaskHistory(req.body).save().then(function(history_model) {
	        		if(history_model){
	        			res.json( history_model.toJSON({shallow: true}) );
	        		}
				  	else{
				  		res.json(null);
				  	}
				});

			}
		)

	router.route('/:historyId')
		.get(
			function(req, res, next){
				models.TaskHistory.find({ where: {'id': req.params.historyId, taskId: req.params.taskId} }).then(function(TaskHistory) {
					if(TaskHistory){
						models.Task.find({ where: {'id': req.params.taskId, projectId: req.params.projectId} }).then(function(task) {
							if(task){
								models.Project.find({ where: {'id': req.params.projectId, accountId: req.params.accountId} }).then(function(project) {
									if(project){
										project.hasTask(task).then(function(result){
											if(result){
												models.Account.find(req.params.accountId).then(function(account) {
													if(account){
														account.hasProject(project).then(function(result){
															if(result){
																models.User.find(req.user.id).then(function(user) {
																	if(user){
																		user.hasAccount(account).then(function(result){
																			if(result){
																				res.json(TaskHistory)	
																			}
																			else
																				res.json(null);
																		})
																	}else{
																  		res.json(null);
																  	}
																})
															}
															else{
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
			function(req, res, next){
				models.TaskHistory.find({ where: {'id': req.params.historyId, taskId: req.params.taskId} }).then(function(TaskHistory) {
					if(TaskHistory){
						models.Task.find({ where: {'id': req.params.taskId, projectId: req.params.projectId} }).then(function(task) {
							if(task){
								models.Project.find({ where: {'id': req.params.projectId, accountId: req.params.accountId} }).then(function(project) {
									if(project){
										project.hasTask(task).then(function(result){
											if(result){
												models.Account.find(req.params.accountId).then(function(account) {
													if(account){
														account.hasProject(project).then(function(result){
															if(result){
																models.User.find(req.user.id).then(function(user) {
																	if(user){
																		user.hasAccount(account).then(function(result){
																			if(result){
																				TaskHistory.updateAttributes(req.body).then(function(TaskHistory){
																					res.json(TaskHistory)	
																				})	
																			}
																			else
																				res.json(null);
																		})
																	}else{
																  		res.json(null);
																  	}
																})
															}
															else{
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
			function(req, res, next){
				models.TaskHistory.find({ where: {'id': req.params.historyId, taskId: req.params.taskId} }).then(function(TaskHistory) {
					if(TaskHistory){
						models.Task.find({ where: {'id': req.params.taskId, projectId: req.params.projectId} }).then(function(task) {
							if(task){
								models.Project.find({ where: {'id': req.params.projectId, accountId: req.params.accountId} }).then(function(project) {
									if(project){
										project.hasTask(task).then(function(result){
											if(result){
												models.Account.find(req.params.accountId).then(function(account) {
													if(account){
														account.hasProject(project).then(function(result){
															if(result){
																models.User.find(req.user.id).then(function(user) {
																	if(user){
																		user.hasAccount(account).then(function(result){
																			if(result){
																				TaskHistory.destroy().then(function(){
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
															}
															else{
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

	return router;
}

