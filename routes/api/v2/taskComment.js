var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var join = Promise.join;

module.exports = function(models, io) {

	router.route('/')
		.post(
			function(req, res, next){
				req.body.TaskId = req.params.taskId;
	  			req.body.UserId = req.user.id;

	  			var userPromise  = models.User.find(parseInt(req.user.id));
	  			var accountPromise = models.Account.find(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })

	  			join(userPromise, accountPromise, projectPromise, taskPromise, function(user, account, project, task) {
	  				if(user && account && project && task){
		  				return [task, user.hasAccount(account), account.hasProject(project)];
		  			} else {
		  				return [ null, null, null]
		  			}
				})
				.spread(function(task, hasAccount, hasProject){
					if(task && hasAccount && hasProject){
						return models.TaskComment.create(req.body)
					} else {
						return null;
					}
				})
				.then(function(taskComment){
					var _response = {}
					if(taskComment){
						_response.data =  	{
												msg : res.__("taskComment.success.create"),
												data : taskComment,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskCommentCreate', taskComment)
					} else {
						_response.data =  	{
												msg : res.__("taskComment.fail.create"),
												data : null,
												error : null
											}	
						_response.status = 400;
					}
					return _response;
				})
				.then(function(_response){
					res.status(_response.status).json(_response.data);
				})
				.error(function(e){
					res.status(500).json({
						msg : res.__("taskComment.error.server"),
						data : null,
						error : e
					});	
				});
			}
		)

	router.route('/:commentId')
		.get(
			function(req, res, next){
				var userPromise  = models.User.find(parseInt(req.user.id));
	  			var accountPromise = models.Account.find(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })
	  			var taskCommentPromise = models.TaskComment.find({ where: {'id': req.params.commentId, TaskId: req.params.taskId}, include: [ models.User ] })

	  			join(userPromise, accountPromise, projectPromise, taskPromise, taskCommentPromise, function(user, account, project, task, taskComment) {
	  				if(user && account && project && task && taskComment){
		  				return [taskComment, user.hasAccount(account), account.hasProject(project), project.hasTask(task)];
		  			} else {
		  				return [ null, null, null, null]
		  			}
				})
				.spread(function(taskComment, hasAccount, hasProject, hasTask){
					var _response = {}
					if(taskComment && hasAccount && hasProject && hasTask){
						_response.data =  	{
												msg : res.__("taskComment.success.fetch"),
												data : taskComment,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("taskComment.fail.fetch"),
												data : null,
												error : null
											}	
						_response.status = 400;
					}
					return _response;
				})
				.then(function(_response){
					res.status(_response.status).json(_response.data);
				})
				.error(function(e){
					res.status(500).json({
						msg : res.__("taskComment.error.server"),
						data : null,
						error : e
					});	
				});
			}
		)
		.post(
			function(req, res, next){
				var userPromise  = models.User.find(parseInt(req.user.id));
	  			var accountPromise = models.Account.find(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })
	  			var taskCommentPromise = models.TaskComment.find({ where: {'id': req.params.commentId, TaskId: req.params.taskId}, include: [ models.User ] })

	  			join(userPromise, accountPromise, projectPromise, taskPromise, taskCommentPromise, function(user, account, project, task, taskComment) {
	  				if(user && account && project && task && taskComment){
		  				return [taskComment, user.hasAccount(account), account.hasProject(project), project.hasTask(task)];
		  			} else {
		  				return [ null, null, null, null]
		  			}
				})
				.spread(function(taskComment, hasAccount, hasProject, hasTask){
					if(taskComment && hasAccount && hasProject && hasTask){
						return taskComment.updateAttributes(req.body)
					} else {
						return null;
					}
				})
				.then(function(taskComment){
					var _response = {}
					if(taskComment){
						_response.data =  	{
												msg : res.__("taskComment.success.update"),
												data : taskComment,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskCommentUpdate', taskComment)
					} else {
						_response.data =  	{
												msg : res.__("taskComment.fail.update"),
												data : null,
												error : null
											}	
						_response.status = 400;
					}
					return _response;
				})
				.then(function(_response){
					res.status(_response.status).json(_response.data);
				})
				.error(function(e){
					res.status(500).json({
						msg : res.__("taskComment.error.server"),
						data : null,
						error : e
					});	
				});
			}
		)
		.delete(
			function(req, res, next){
				var userPromise  = models.User.find(parseInt(req.user.id));
	  			var accountPromise = models.Account.find(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })
	  			var taskCommentPromise = models.TaskComment.find({ where: {'id': req.params.commentId, TaskId: req.params.taskId}, include: [ models.User ] })

	  			join(userPromise, accountPromise, projectPromise, taskPromise, taskCommentPromise, function(user, account, project, task, taskComment) {
	  				if(user && account && project && task && taskComment){
		  				return [taskComment, user.hasAccount(account), account.hasProject(project), project.hasTask(task)];
		  			} else {
		  				return [ null, null, null, null]
		  			}
				})
				.spread(function(taskComment, hasAccount, hasProject, hasTask){
					if(taskComment && hasAccount && hasProject && hasTask){
						return taskComment.destroy()
					} else {
						return null;
					}
				})
				.then(function(taskComment){
					var _response = {}
					if(taskComment){
						_response.data =  	{
												msg : res.__("taskComment.success.delete"),
												data : taskComment,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskCommentDelete', taskComment)
					} else {
						_response.data =  	{
												msg : res.__("taskComment.fail.delete"),
												data : null,
												error : null
											}	
						_response.status = 400;
					}
					return _response;
				})
				.then(function(_response){
					res.status(_response.status).json(_response.data);
				})
				.error(function(e){
					res.status(500).json({
						msg : res.__("taskComment.error.server"),
						data : null,
						error : e
					});	
				});
			}
		)

	return router;
}

