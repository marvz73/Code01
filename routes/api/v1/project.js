var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var fs = require('fs');
var join = Promise.join;

module.exports = function(models, io) {

	router.route('/')
		.post( 
	  		function(req, res, next) {
	  			req.body.AccountId = req.params.accountId;
	  			req.body.UserId = req.user.id;

	  			var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));

	  			join(userPromise, accountPromise, function(user, account) {
	  				if(user && account){
		  				return [account, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(account, result){
					if(account && result){
						return models.Project.create(req.body)
					} else {
						return null;
					}
				})
				.then(function(project){
					var _response = {}
					if(project){
						_response.data =  	{
												msg : res.__("project.success.create"),
												data : project,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).emit('projectCreate', project)
					} else {
						_response.data =  	{
												msg : res.__("project.fail.create"),
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
						msg : res.__("project.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
	  	)

	router.route('/:projectId')
		.get( 
	  		function(req, res, next) {
	  			var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User, { model: models.Project, as: 'SubProjects' }, models.Attachment ] });

	  			join(userPromise, accountPromise, projectPromise, function(user, account, project) {
	  				if(user && account && project){
		  				return [project, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(project, result){
					var _response = {}
					if(project && result){
						_response.data =  	{
												msg : res.__("project.success.fetch"),
												data : project,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("project.fail.fetch"),
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
						msg : res.__("project.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
	  	)
	  	.post( 
	  		function(req, res, next) {
	  			var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });

	  			join(userPromise, accountPromise, projectPromise, function(user, account, project) {
	  				if(user && account && project){
		  				return [project, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(project, result){
					if(project && result){
						return project.updateAttributes(req.body)
					} else {
						return null;
					}
				})
				.then(function(project){
					var _response = {}
					if(project){
						_response.data =  	{
												msg : res.__("project.success.update"),
												data : project,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).emit('projectUpdate', project);
					} else {
						_response.data =  	{
												msg : res.__("project.fail.update"),
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
						msg : res.__("project.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
	  	)
	  	.delete( 
	  		function(req, res, next) {
	  			var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });

	  			join(userPromise, accountPromise, projectPromise, function(user, account, project) {
	  				if(user && account && project){
		  				return [project, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(project, result){
					if(project && result){
						return project.destroy()
					} else {
						return null;
					}
				})
				.then(function(project){
					var _response = {}
					if(project){
						_response.data =  	{
												msg : res.__("project.success.delete"),
												data : project,
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).emit('projectDelete', project);
					} else {
						_response.data =  	{
												msg : res.__("project.fail.delete"),
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
						msg : res.__("project.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
	  	)

	router.route('/:projectId/tasks')
		.get(
			function(req, res, next) {
				var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });

	  			join(userPromise, accountPromise, projectPromise, function(user, account, project) {
	  				if(user && account && project){
		  				return [project, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(project, result){
					if(project && result){
						return project.getTasks({ include: [ models.User ]})
					} else {
						return null;
					}
				})
				.then(function(tasks){
					var _response = {}
					if(tasks){
						_response.data =  	{
												msg : res.__("task.success.fetch"),
												data : tasks,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("task.fail.fetch"),
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
						msg : res.__("task.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
		)

	router.route('/:projectId/attachments')
		.get(
			function(req, res, next) {
				var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });

	  			join(userPromise, accountPromise, projectPromise, function(user, account, project) {
	  				if(user && account && project){
		  				return [project, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(project, result){
					if(project && result){
						return project.getAttachment({where: {attachmentable: 'project'}})
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
						_response.status = 200;
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
			function(req, res, next) {
				var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });

	  			join(userPromise, accountPromise, projectPromise, function(user, account, project) {
	  				if(user && account && project){
		  				return [user, project, user.hasAccount(account)];
		  			} else {
		  				return [ null, null, null]
		  			}
				})
				.spread(function(user, project, result){
					if(result){
						var attachments = [];
						var names = "";
						var oldAttachment = project.getAttachment();
						
						req.files.file.forEach(function(element, index, array){
							names += element.originalname + " ";
							attachments.push(project.createAttachment({
								originalName: element.originalname,
								name: element.name,
								path: element.path,
								extension: element.extension,
								attachmentable: 'project',
								UserId: req.user.id
							}))
						})
						return [ user, project, oldAttachment, Promise.all(attachments), names];
					} else {
						return [ null, null, null, null, null];
					}
				})
				.spread(function(user, project, oldAttachment, attachments, names){
					if(oldAttachment){
						oldAttachment.destroy();
						fs.unlinkSync(__dirname + '/../../../uploads/' + oldAttachment.get('name'))
					}
					
					var _response = {}
					
					if(attachments){
						project.createHistory({
							action: user.get('fullName') + ' added an attachment. ( ' + names + ')',
							historyable: 'project',
							UserId: req.user.id
						});
						_response.data =  	{
												msg : res.__("attachment.success.create"),
												data : attachments[0],
												error : null
											}
						_response.status = 200;
						io.of('/' + req.params.accountId).emit('projectAttachmentCreate', attachments[0])
					} else {
						_response.data =  	{
												msg : res.__("attachment.fail.create"),
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
						msg : res.__("attachment.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
		)

	router.route('/:projectId/histories')
		.get(
			function(req, res, next) {
				var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });

	  			join(userPromise, accountPromise, projectPromise, function(user, account, project) {
	  				if(user && account && project){
		  				return [project, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(project, result){
					if(project && result){
						return project.getHistories({where: {historyable: 'project'}})
					} else {
						return null;
					}
				})
				.then(function(histories){
					var _response = {}
					if(histories){
						_response.data =  	{
												msg : res.__("history.success.fetch"),
												data : histories,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("history.fail.fetch"),
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
						msg : res.__("history.error.server"),
						data : null,
						error : e
					});	
				});
	  		}
		)

	var task = require('./task.js')(models, io);
	router.use('/:projectId/task', task);

	var projectAttachment = require('./projectAttachment.js')(models, io);
	router.use('/:projectId/attachment', projectAttachment);


	return router;
}

