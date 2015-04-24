var express = require('express');
var router = express.Router({mergeParams: true});


module.exports = function(models) {

	router.route('/')
		.post(
			function(req, res, next){
				req.body.createdBy = req.user.id;
				new dbmodel.TaskComment(req.body).save().then(function(comment_model) {
	        		if(comment_model){
	        			res.json( comment_model.toJSON({shallow: true}) );
	        		}
				  	else{
				  		res.json(null);
				  	}
				});

			}
		)

	router.route('/:commentId')
		.get(
			function(req, res, next){
				models.TaskComment.find({ where: {'id': req.params.commentId, taskId: req.params.taskId} }).then(function(TaskComment) {
					if(TaskComment){
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
																				res.json(TaskComment)	
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
				req.body.id = req.params.commentId;
				new dbmodel.TaskComment(req.body).save().then(function(comment_model) {
	        		if(comment_model){
	        				res.json( comment_model.toJSON({shallow: true}) );
	        		}
				  	else{
				  		res.json(null);
				  	}
				});

			}
		)
		.delete(
			function(req, res, next){
				new dbmodel.TaskComment({id: req.params.commentId}).destroy().then(function(comment_model) {
	        		if(comment_model){
	        				res.json( comment_model.toJSON({shallow: true}) );
	        		}
				  	else{
				  		res.json(null);
				  	}
				});

			}
		)

	return router;
}

