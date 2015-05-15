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
	router.param('attachmentId', /^\d+$/);

	router.route('/:attachmentId')
		.get(
			function(req, res, next){
				var userPromise  = models.User.find(req.user.id);
	  			var accountPromise = models.Account.find(req.params.accountId);
	  			var projectPromise = models.Project.find({ where: {'id': req.params.projectId, AccountId: req.params.accountId}, include: [ models.User ] });
	  			var attachmentPromise = models.ProjectAttachment.find({ where: {'id': req.params.attachmentId, ProjectId: req.params.projectId}});

	  			join(userPromise, accountPromise, projectPromise, attachmentPromise, function(user, account, project, attachment) {
	  				if(user && account && project && attachment){
		  				return [attachment, user.hasAccount(account)];
		  			} else {
		  				return [ null, null]
		  			}
				})
				.spread(function(attachment, result){
					var _response = {}
					if(attachment && result){
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

	return router;
}

