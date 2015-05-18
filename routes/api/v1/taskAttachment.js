var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var fs = require('fs');
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
	router.param('taskAttachment', /^\d+$/);

	router.route('/:taskAttachmentId')
		.get(
			function(req, res, next){
				var userPromise  = models.User.find(req.user.id);
	  			var accountPromise = models.Account.find(req.params.accountId);
	  			var projectPromise = models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })
	  			var taskAttachmentPromise = models.TaskAttachment.find({ where: {'id': req.params.taskAttachmentId, TaskId: req.params.taskId}})

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
						_response.status = 400;
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
				var userPromise  = models.User.find(req.user.id);
	  			var accountPromise = models.Account.find(req.params.accountId);
	  			var projectPromise = models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var taskPromise = models.Task.find({ where: {'id': req.params.taskId, ProjectId: req.params.projectId}, include: [ models.User ] })
	  			var taskAttachmentPromise = models.TaskAttachment.find({ where: {'id': req.params.taskAttachmentId, TaskId: req.params.taskId}})

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

