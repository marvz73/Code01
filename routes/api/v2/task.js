var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var join = Promise.join;

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
	  			req.body.UserId = req.user.id;

	  			var userPromise  = models.User.find(parseInt(req.user.id));
	  			var accountPromise = models.Account.find(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });

	  			join(userPromise, accountPromise, projectPromise, function(user, account, project) {
	  				if(user && account && project){
		  				return [project, user.hasAccount(account), account.hasProject(project)];
		  			} else {
		  				return [ null, null, null]
		  			}
				})
				.spread(function(project, hasAccount, hasProject){
					if(project && hasAccount && hasProject){
						return models.Task.create(req.body)
					} else {
						return null;
					}
				})
				.then(function(task){
					var _response = {}
					if(task){
						_response.data =  	{
												msg : res.__("task.success.create"),
												data : task,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskCreate', task)
					} else {
						_response.data =  	{
												msg : res.__("task.fail.create"),
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
						msg : res.__("task.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
	  	)

	router.route('/:taskId')
		.get( 
	  		function(req, res, next) {
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
					var _response = {}
					if(task && hasAccount && hasProject){
						_response.data =  	{
												msg : res.__("task.success.fetch"),
												data : task,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("task.fail.fetch"),
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
						msg : res.__("task.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
	  	)
	  	.post( 
	  		function(req, res, next) {
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
						return task.updateAttributes(req.body)
					} else {
						return null;
					}
				})
				.then(function(task){
					var _response = {}
					if(task){
						_response.data =  	{
												msg : res.__("task.success.update"),
												data : task,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskUpdate', task)
					} else {
						_response.data =  	{
												msg : res.__("task.fail.update"),
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
						msg : res.__("task.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
	  	)
	  	.delete( 
	  		function(req, res, next) {
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
						return task.destroy()
					} else {
						return null;
					}
				})
				.then(function(task){
					var _response = {}
					if(task){
						_response.data =  	{
												msg : res.__("task.success.delete"),
												data : task,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).to(req.params.projectId).emit('taskDelete', task)
					} else {
						_response.data =  	{
												msg : res.__("task.fail.delete"),
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
						msg : res.__("task.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
	  	)

	router.route('/:taskId/histories')
		.get(
			function(req, res, next){
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
						return task.getTaskHistories({ include: [ models.User ]})
					} else {
						return null;
					}
				})
				.then(function(histories){
					var _response = {}
					if(histories){
						_response.data =  	{
												msg : res.__("taskHistory.success.fetch"),
												data : histories,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("taskHistory.fail.fetch"),
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
						msg : res.__("taskHistory.error.server"),
						data : null,
						error : e
					});	
				});
			}
		)

	router.route('/:taskId/comments')
		.get(
			function(req, res, next){
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
						return task.getTaskComments({ include: [ models.User ]})
					} else {
						return null;
					}
				})
				.then(function(comments){
					var _response = {}
					if(comments){
						_response.data =  	{
												msg : res.__("taskComment.success.fetch"),
												data : comments,
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

	router.route('/:taskId/attachments')
		.get(
			function(req, res, next){
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
						return task.getTaskAttachments({ include: [ models.User ]})
					} else {
						return null;
					}
				})
				.then(function(attachments){
					var _response = {}
					if(attachments){
						_response.data =  	{
												msg : res.__("attachment.success.fetch"),
												data : attachments,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("attachment.fail.fetch"),
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
						msg : res.__("attachment.error.server"),
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

	  			join(userPromise, accountPromise, projectPromise, taskPromise, function(user, account, project, task) {
	  				if(user && account && project && task){
		  				return [task, user.hasAccount(account), account.hasProject(project)];
		  			} else {
		  				return [ null, null, null]
		  			}
				})
				.spread(function(task, hasAccount, hasProject){
					if(task && hasAccount && hasProject){
						var attachments = [];

						req.files.file.forEach(function(element, index, array){
							attachments.push(models.TaskAttachment.create({
								originalName: element.originalname,
								name: element.name,
								path: element.path,
								extension: element.extension,
								TaskId: req.params.taskId,
								UserId: req.user.id
							}))
						})
						return Promise.all(attachments)
						return true
					} else {
						return null;
					}
				})
				.then(function(attachments){
					console.log(attachments)
					console.log(req.files)
					var _response = {}
					if(attachments){
						_response.data =  	{
												msg : res.__("attachment.success.create"),
												data : attachments,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("attachment.fail.create"),
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
						msg : res.__("attachment.error.server"),
						data : null,
						error : e
					});	
				});
			}
		)

	return router;
}
