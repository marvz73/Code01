var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var fs = require('fs');
var join = Promise.join;

module.exports = function(models) {

	router.route('/:userId')
		.get( 
			function(req, res, next) {
				models.User.findOne({ where: {'id': req.params.userId}, include: [ {model: models.Attachment, as: 'ProfilePicture'} ] }).then(function(user) {
					if(user){
						res.json({
							msg : res.__("user.success.fetch"),
							data : user
						})
					}else{
				  		res.status(200).json({
							msg : res.__("user.fail.fetch"),
							data : null
						});
				  	}
				})
	  		}
	  	)

	router.route('/:userId/profilePicture')
		.get( 
			function(req, res, next) {
				models.User.findById(parseInt(req.params.userId))
				.then(function(user){
					if(user){
						return user.getProfilePicture({where: {attachmentable: 'user'}});
					}else{
						return null;
				  	}
				})
				.then(function(profilePicture) {
					var _response = {}
					if(profilePicture){
						var options = {
							root: __dirname + '/../../../uploads/',
							headers: {
								'Content-Disposition' : 'attachment;filename="' + profilePicture.get('originalName') + '"'
							}
						}
						res.sendFile(profilePicture.get('name'), options, function(err){
							if(err){
								console.log(err)
							} else {

							}
						})
					}else{
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
		.post( 
			function(req, res, next) {
				models.User.findById(parseInt(req.params.userId))
				.then(function(user) {
					var _response = {}
					if(user){
						var attachments = [];
						var oldAttachment = user.getProfilePicture({where: {attachmentable: 'user'}});
						
						req.files.file.forEach(function(element, index, array){
							attachments.push(user.createProfilePicture({
								originalName: element.originalname,
								name: element.name,
								path: element.path,
								extension: element.extension,
								attachmentable: 'user',
								UserId: req.user.id
							}))
						})
						return [ oldAttachment, Promise.all(attachments)];
					}else{
				  		return [ null, null];
				  	}
				})
				.spread(function(oldAttachment, attachments){
					if(oldAttachment){
						oldAttachment.destroy();
						fs.unlinkSync(__dirname + '/../../../uploads/' + oldAttachment.get('name'))
					}
					
					var _response = {}
					
					if(attachments){
						_response.data =  	{
												msg : res.__("attachment.success.create"),
												data : attachments[0],
												error : null
											}
						_response.status = 200;
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

	return router;
}

