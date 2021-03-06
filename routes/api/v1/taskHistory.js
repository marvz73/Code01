var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var join = Promise.join;

module.exports = function(models, io) {

	router.route('/')
		.post(
			function(req, res, next){
				req.body.historyable = 'task';
	  			req.body.UserId = req.user.id;

	  			var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.findOne({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })

	  			join(userPromise, accountPromise, projectPromise, taskPromise, function(user, account, project, task) {
	  				if(user && account && project && task){
		  				return [task, user.hasAccount(account), account.hasProject(project)];
		  			} else {
		  				return [ null, null, null]
		  			}
				})
				.spread(function(task, hasAccount, hasProject){
					if(task && hasAccount && hasProject){
						return task.createHistory(req.body)
					} else {
						return null;
					}
				})
				.then(function(taskHistory){
					var _response = {}
					if(taskHistory){
						_response.data =  	{
												msg : res.__("taskHistory.success.create"),
												data : taskHistory,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskHistoryCreate', taskHistory)
					} else {
						_response.data =  	{
												msg : res.__("taskHistory.fail.create"),
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
						msg : res.__("taskHistory.error.server"),
						data : null,
						error : e
					});	
				});
			}
		)

	router.route('/:historyId')
		.get(
			function(req, res, next){
				var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.findOne({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })
	  			var taskHistoryPromise = models.History.findOne({ where: {'id': req.params.historyId, historyable: 'task'}, include: [ models.User ] })

	  			join(userPromise, accountPromise, projectPromise, taskPromise, taskHistoryPromise, function(user, account, project, task, taskHistory) {
	  				if(user && account && project && task && taskHistory){
		  				return [taskHistory, user.hasAccount(account), account.hasProject(project), project.hasTask(task)];
		  			} else {
		  				return [ null, null, null, null]
		  			}
				})
				.spread(function(taskHistory, hasAccount, hasProject, hasTask){
					var _response = {}
					if(taskHistory && hasAccount && hasProject && hasTask){
						_response.data =  	{
												msg : res.__("taskHistory.success.fetch"),
												data : taskHistory,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("taskHistory.fail.fetch"),
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
						msg : res.__("taskHistory.error.server"),
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
	  			var taskHistoryPromise = models.History.findOne({ where: {'id': req.params.historyId, historyable: 'task'}, include: [ models.User ] })

	  			join(userPromise, accountPromise, projectPromise, taskPromise, taskHistoryPromise, function(user, account, project, task, taskHistory) {
	  				if(user && account && project && task && taskHistory){
		  				return [taskHistory, user.hasAccount(account), account.hasProject(project), project.hasTask(task)];
		  			} else {
		  				return [ null, null, null, null]
		  			}
				})
				.spread(function(taskHistory, hasAccount, hasProject, hasTask){
					if(taskHistory && hasAccount && hasProject && hasTask){
						return taskHistory.updateAttributes(req.body)
					} else {
						return null;
					}
				})
				.then(function(taskHistory){
					var _response = {}
					if(taskHistory){
						_response.data =  	{
												msg : res.__("taskHistory.success.update"),
												data : taskHistory,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskHistoryUpdate', taskHistory)
					} else {
						_response.data =  	{
												msg : res.__("taskHistory.fail.update"),
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
						msg : res.__("taskHistory.error.server"),
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
	  			var taskHistoryPromise = models.History.findOne({ where: {'id': req.params.historyId, historyable: 'task'}, include: [ models.User ] })

	  			join(userPromise, accountPromise, projectPromise, taskPromise, taskHistoryPromise, function(user, account, project, task, taskHistory) {
	  				if(user && account && project && task && taskHistory){
		  				return [taskHistory, user.hasAccount(account), account.hasProject(project), project.hasTask(task)];
		  			} else {
		  				return [ null, null, null, null]
		  			}
				})
				.spread(function(taskHistory, hasAccount, hasProject, hasTask){
					if(taskHistory && hasAccount && hasProject && hasTask){
						return taskHistory.destroy()
					} else {
						return null;
					}
				})
				.then(function(taskHistory){
					var _response = {}
					if(taskHistory){
						_response.data =  	{
												msg : res.__("taskHistory.success.delete"),
												data : taskHistory,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskHistoryDelete', taskHistory)
					} else {
						_response.data =  	{
												msg : res.__("taskHistory.fail.delete"),
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
						msg : res.__("taskHistory.error.server"),
						data : null,
						error : e
					});	
				});
			}
		)

	return router;
}

