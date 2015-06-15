var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var _ = require("underscore");
var join = Promise.join;

module.exports = function(models, io) {

	router.route('/')
		.get(
			function(req, res, next){
				if(req.query.hasOwnProperty("ids")){
					req.query.id = req.query.ids;
					delete req.query.ids;
				}

				models.Attachment.findAll({where: req.query, include: [{ all: true }]}).then(function(attachments) {
					var parsed = [];
					_.each(attachments, function(element) {
						element = element.get({ plain: true });
						// element.attachments = _.pluck(element.Attachments, 'id');
						// delete element.Attachments;
						parsed.push(element);
					});
					res.json({
						attachments: parsed,
						meta: {
							status: 'info',
							msg: res.__("attachment.success.fetch")
						}
					});
				})
			}
		)
	  	.post(
	  		function(req, res, next) {
	  			models.Attachment.create(req.body.attachment).then(function(attachment) {
					res.json({
						attachment : attachment,
						meta: {
							status: 'success',
							msg: res.__("attachment.success.create")
						}
					});
				})
	  		}
	  	)

	router.route('/:attachment_id')
		.get( 
	  		function(req, res, next) {
	  			models.Attachment.findOne({ where: {id: req.params.attachment_id}, include: [ {all: true} ]  }).then(function(attachment){
	  				res.json({
						attachment : attachment,
						meta: {
							status: 'info',
							msg: res.__("attachment.success.fetch")
						}
					});
	  			});
	  		}
	  	)
	  	.put( 
	  		function(req, res, next) {
	  			models.Attachment.findById(parseInt(req.params.attachment_id)).then(function(attachment){
	  				return attachment.updateAttributes(req.body.attachment);
	  			}).then(function(attachment){
	  				res.json({
						attachment : attachment,
						meta: {
							status: 'success',
							msg: res.__("attachment.success.update")
						}
					});
	  			});
	  		}
	  	)
	  	.delete( 
	  		function(req, res, next) {
	  			models.Attachment.findById(parseInt(req.params.attachment_id)).then(function(attachment){
	  				return attachment.destroy();
	  			}).then(function(attachment){
	  				res.json({
	  					attachment: attachment,
	  					meta: {
	  						status: 'delete',
							msg: res.__("attachment.success.delete")
						}
	  				})
	  			});
	  		}
	  	)

	return router;
}

