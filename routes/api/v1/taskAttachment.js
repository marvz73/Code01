var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var fs = require('fs');
var join = Promise.join;

module.exports = function(models, io) {

	router.route('/:taskAttachmentId')
		.get(
			function(req, res, next){
				var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.findOne({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })
	  			var taskAttachmentPromise = models.Attachment.findOne({ where: {'id': req.params.taskAttachmentId, attachmentable: 'task'}, include: [ models.User ] });

	  			join(userPromise, accountPromise, projectPromise, taskPromise, taskAttachmentPromise, function(user, account, project, task, attachment) {
	  				if(user && account && project && task && attachment){
		  				return [attachment, user.hasAccount(account), account.hasProject(project)];
		  			} else {
		  				return [ null, null, null]
		  			}
				})
				.spread(function(attachment, hasAccount, hasProject){
					var _response = {}
					if(attachment && hasAccount && hasProject){
						var options = {
							root: __dirname + '/../../../uploads/',
							headers: {
								'Content-Disposition' : 'attachment;filename="' + attachment.get('originalName') + '"'
							}
						}
						res.sendFile(attachment.get('name'), options, function(err){
							if(err){
								console.log(err)
							} else {

							}
						})
					} else {
						_response.data =  	{
												msg : res.__("attachment.fail.fetch"),
												data : null,
												error : null
											}	
						_response.status = 200;
						res.status(_response.status).json(_response.data);
					}
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
		.delete(
			function(req, res, next){
				var userPromise  = models.User.findById(parseInt(req.user.id));
	  			var accountPromise = models.Account.findById(parseInt(req.params.accountId));
	  			var projectPromise = models.Project.findOne({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.findOne({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })
	  			var taskAttachmentPromise = models.Attachment.findOne({ where: {'id': req.params.taskAttachmentId, attachmentable: 'task'}, include: [ models.User ] });

	  			join(userPromise, accountPromise, projectPromise, taskPromise, taskAttachmentPromise, function(user, account, project, task, attachment) {
	  				if(user && account && project && task && attachment){
		  				return [attachment, user.hasAccount(account), account.hasProject(project)];
		  			} else {
		  				return [ null, null, null]
		  			}
				})
				.spread(function(attachment, hasAccount, hasProject){
					if(attachment && hasAccount && hasProject){
						return attachment.destroy()
					} else {
						return null
					}
				})
				.then(function(attachment){
					var _response = {}
					if(attachment){
						task.createHistory({
							action: user.get('fullName') + ' deleted '+ attachment.get('name') +' attachment.',
							historyable: 'task',
							UserId: req.user.id
						});
						 fs.unlink(__dirname + '/../../../uploads/' + attachment.get('name'))
						_response.data =  	{
												msg : res.__("attachment.success.delete"),
												data : attachment,
												error : null
											}
						_response.status = 200;
					} else {
						_response.data =  	{
												msg : res.__("attachment.fail.delete"),
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

	return router;
}

