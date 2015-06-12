var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var join = Promise.join;

module.exports = function(models, io) {

	router.route('/')
		.post(
			function(req, res, next){
	  			req.body.UserId = req.user.id;

	  			var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.findOne({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })

	  			join(userPromise, accountPromise, projectPromise, taskPromise, function(user, account, project, task) {
	  				if(user && account && project && task){
		  				return [task, user, user.hasAccount(account), account.hasProject(project)];
		  			} else {
		  				return [ null, null, null, null]
		  			}
				})
				.spread(function(task, user, hasAccount, hasProject){
					if(task && hasAccount && hasProject){
						return [task, task.createComment(req.body), user]
					} else {
						return [null, null, null];
					}
				})
				.spread(function(task, taskComment, user){
					var _response = {}
					if(taskComment){
						task.createHistory({
							action: user.get('fullName') + ' created a comment.',
							historyable: 'task',
							UserId: req.user.id
						});
						var parsedComment = taskComment.get({ plain: true });
						parsedComment.User = user.get({ plain: true });
						_response.data =  	{
												msg : res.__("taskComment.success.create"),
												data : parsedComment,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskCommentCreate', parsedComment)
					} else {
						_response.data =  	{
												msg : res.__("taskComment.fail.create"),
												data : null,
												error : null
											}	
						_response.status = 200;
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
				var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.findOne({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })
	  			var taskCommentPromise = models.Comment.findOne({ where: {'id': req.params.commentId, commentable: 'task'}, include: [ models.User ] })

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
						_response.status = 200;
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
				var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.findOne({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })
	  			var taskCommentPromise = models.Comment.findOne({ where: {'id': req.params.commentId, commentable: 'task'}, include: [ models.User ] })

	  			join(userPromise, accountPromise, projectPromise, taskPromise, taskCommentPromise, function(user, account, project, task, taskComment) {
	  				if(user && account && project && task && taskComment){
		  				return [task, user, taskComment, user.hasAccount(account), account.hasProject(project), project.hasTask(task)];
		  			} else {
		  				return [ null, null, null, null, null, null]
		  			}
				})
				.spread(function(task, user, taskComment, hasAccount, hasProject, hasTask){
					if(taskComment && hasAccount && hasProject && hasTask){
						return [task, user, taskComment.updateAttributes(req.body)]
					} else {
						return [null, null, null];
					}
				})
				.then(function(task, user, taskComment){
					var _response = {}
					if(taskComment){
						task.createHistory({
							action: user.get('fullName') + ' updated a comment.',
							historyable: 'task',
							UserId: req.user.id
						});
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
						_response.status = 200;
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
				var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.findOne({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })
	  			var taskCommentPromise = models.Comment.findOne({ where: {'id': req.params.commentId, commentable: 'task'}, include: [ models.User ] })

	  			join(userPromise, accountPromise, projectPromise, taskPromise, taskCommentPromise, function(user, account, project, task, taskComment) {
	  				if(user && account && project && task && taskComment){
		  				return [task, user, taskComment, user.hasAccount(account), account.hasProject(project), project.hasTask(task)];
		  			} else {
		  				return [ null, null, null, null, null, null]
		  			}
				})
				.spread(function(task, user, taskComment, hasAccount, hasProject, hasTask){
					if(taskComment && hasAccount && hasProject && hasTask){
						return [task, user, taskComment.destroy()]
					} else {
						return [null, null, null];
					}
				})
				.then(function(task, user, taskComment){
					var _response = {}
					if(taskComment){
						task.createHistory({
							action: user.get('fullName') + ' deleted a comment.',
							historyable: 'task',
							UserId: req.user.id
						});
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
						_response.status = 200;
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

