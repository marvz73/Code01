var express = require('express');
var router = express.Router({mergeParams: true});


module.exports = function(models) {

	router.route('/')
		.post(
			function(req, res, next){
				req.body.TaskId = req.params.taskId;
	  			req.body.CreatedById = req.user.id;
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
															models.TaskHistory.create(req.body).then(function(TaskHistory) {
																res.json({
																	msg : "Return message here...",
																	data : TaskHistory
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

	router.route('/:historyId')
		.get(
			function(req, res, next){
				models.TaskHistory.find({ where: {'id': req.params.historyId, TaskId: req.params.taskId} }).then(function(TaskHistory) {
					if(TaskHistory){
						models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId} }).then(function(task) {
							if(task){
								models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
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
																				res.json({
																					msg : "Return message here...",
																					data : TaskHistory
																				});		
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
			function(req, res, next){
				models.TaskHistory.find({ where: {'id': req.params.historyId, TaskId: req.params.taskId} }).then(function(TaskHistory) {
					if(TaskHistory){
						models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId} }).then(function(task) {
							if(task){
								models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
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
																					res.json({
																						msg : "Return message here...",
																						data : TaskHistory
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
			function(req, res, next){
				models.TaskHistory.find({ where: {'id': req.params.historyId, TaskId: req.params.taskId} }).then(function(TaskHistory) {
					if(TaskHistory){
						models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId} }).then(function(task) {
							if(task){
								models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId} }).then(function(project) {
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
																					res.json({
																						msg : 'Record is destroyed!',
																						data : null
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
															}
															else{
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

	return router;
}

