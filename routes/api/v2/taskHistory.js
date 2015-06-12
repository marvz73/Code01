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
				
				models.TaskHistory.findAll({where: req.query, include: [{ all: true }]}).then(function(histories) {
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
						histories: histories
					});
				})
			}
		)
	  	.post(
	  		function(req, res, next) {
	  			models.TaskHistory.create(req.body.history).then(function(history) {
					res.json({
						history : history
					});
				})
	  		}
	  	)

	router.route('/:historyId')
		.get( 
	  		function(req, res, next) {
	  			models.TaskHistory.findOne({ where: {id: req.params.historyId}, include: [ {all: true} ]  }).then(function(history){
	  				parsed = history.get({ plain: true });
	  				res.json({
						history : parsed
					});
	  			});
	  		}
	  	)
	  	.put( 
	  		function(req, res, next) {
	  			models.TaskHistory.findById(parseInt(req.params.historyId)).then(function(history){
	  				return history.updateAttributes(req.body.history);
	  			}).then(function(history){
	  				res.json({
						history : history
					});
	  			});
	  		}
	  	)
	  	.delete( 
	  		function(req, res, next) {
	  			models.TaskHistory.findById(parseInt(req.params.historyId)).then(function(history){
	  				return history.destroy();
	  			}).then(function(history){
	  				res.json({
	  					history: history
	  				})
	  			});
	  		}
	  	)

	return router;
}

