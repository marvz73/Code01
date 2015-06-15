var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var _ = require("underscore");
var join = Promise.join;

module.exports = function(models, io) {

	router.route('/')
		router.route('/')
		.get(
			function(req, res, next){
				if(req.query.hasOwnProperty("ids")){
					req.query.id = req.query.ids;
					delete req.query.ids;
				}
				
				models.Comment.findAll({where: req.query, include: [{ all: true }]}).then(function(comments) {
					var parsed = [];
					// _.each(tasks, function(element) {
					// 	element = element.get({ plain: true });
					// 	element.attachments = _.pluck(element.Attachments, 'id');
					// 	delete element.Attachments;
					// 	element.comments = _.pluck(element.Comments, 'id');
					// 	delete element.comments;
					// 	parsed.push(element);
					// });
					res.json({
						comments: comments,
						meta: {
							status: 'info',
							msg: res.__("taskComment.success.fetch")
						}
					});
				})
			}
		)
	  	.post(
	  		function(req, res, next) {
	  			models.Comment.create(req.body.comment).then(function(comment) {
					res.json({
						comment : comment,
						meta: {
							status: 'success',
							msg: res.__("taskComment.success.create")
						}
					});
				})
	  		}
	  	)

	router.route('/:commentId')
		.get( 
	  		function(req, res, next) {
	  			models.Comment.findOne({ where: {id: req.params.commentId}, include: [ {all: true} ]  }).then(function(comment){
	  				parsed = comment.get({ plain: true });
	  				res.json({
						comment : parsed,
						meta: {
							status: 'info',
							msg: res.__("taskComment.success.fetch")
						}
					});
	  			});
	  		}
	  	)
	  	.put( 
	  		function(req, res, next) {
	  			models.Comment.findById(parseInt(req.params.commentId)).then(function(comment){
	  				return comment.updateAttributes(req.body.comment);
	  			}).then(function(comment){
	  				res.json({
						comment : comment,
						meta: {
							status: 'success',
							msg: res.__("taskComment.success.update")
						}
					});
	  			});
	  		}
	  	)
	  	.delete( 
	  		function(req, res, next) {
	  			models.Comment.findById(parseInt(req.params.commentId)).then(function(comment){
	  				return comment.destroy();
	  			}).then(function(comment){
	  				res.json({
	  					comment: comment,
	  					meta: {
	  						status: 'success',
							msg: res.__("taskComment.success.delete")
						}
	  				})
	  			});
	  		}
	  	)

	return router;
}

