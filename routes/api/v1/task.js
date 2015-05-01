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
	router.param('taskId', /^\d+$/);

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
													res.json({
														msg : "Return message here...",
														data : task
													});	
													io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskCreate', task)
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

	router.route('/:taskId')
		.get( 
	  		function(req, res, next) {
	  			models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] }).then(function(task) {
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
															res.json({
																msg : "Return message here...",
																data : task
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
	  			models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] }).then(function(task) {
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
																res.json({
																	msg : "Return message here...",
																	data : task
																});;
																io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskUpdate', task)
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
	  			models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] }).then(function(task) {
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
															task.destroy().then(function(task){
																res.json({
																	msg : 'Record is destroyed!',
																	data : task
																})
																io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskDelete', task)
															})
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
															task.getTaskHistories({ include: [ models.User ]}).then(function(histories){
																res.json({
																	msg : "Return message here...",
																	data : histories
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
															task.getTaskComments({ include: [ models.User ]}).then(function(comments){
																res.json({
																	msg : "Return message here...",
																	data : comments
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

	var history = require('./taskHistory.js')(models, io);
	router.use('/:taskId/history', history);

	var taskComment = require('./taskComment.js')(models, io);
	router.use('/:taskId/comment', taskComment);

	return router;
}

