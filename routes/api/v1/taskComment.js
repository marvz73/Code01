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
															models.TaskComment.create(req.body).then(function(TaskComment) {
																res.json({
																	msg : "Return message here...",
																	data : TaskComment
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

	router.route('/:commentId')
		.get(
			function(req, res, next){
				models.TaskComment.find({ where: {'id': req.params.commentId, TaskId: req.params.taskId} }).then(function(TaskComment) {
					if(TaskComment){
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
																					data : TaskComment
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
				models.TaskComment.find({ where: {'id': req.params.commentId, TaskId: req.params.taskId} }).then(function(TaskComment) {
					if(TaskComment){
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
																				TaskComment.updateAttributes(req.body).then(function(TaskComment){
																					res.json({
																						msg : "Return message here...",
																						data : TaskComment
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
				models.TaskComment.find({ where: {'id': req.params.commentId, TaskId: req.params.taskId} }).then(function(TaskComment) {
					if(TaskComment){
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
																				TaskComment.destroy().then(function(){
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

