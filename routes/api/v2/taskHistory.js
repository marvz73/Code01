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
				
				models.History.findAll({where: req.query, include: [{ all: true }]}).then(function(histories) {
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
						histories: histories,
						meta: {
							status: 'info',
							msg: res.__("taskHistory.success.fetch")
						}
					});
				})
			}
		)
	  	.post(
	  		function(req, res, next) {
	  			models.History.create(req.body.history).then(function(history) {
					res.json({
						history : history,
						meta: {
							status: 'success',
							msg: res.__("taskHistory.success.create")
						}
					});
				})
	  		}
	  	)

	router.route('/:historyId')
		.get( 
	  		function(req, res, next) {
	  			models.History.findOne({ where: {id: req.params.historyId}, include: [ {all: true} ]  }).then(function(history){
	  				parsed = history.get({ plain: true });
	  				res.json({
						history : parsed,
						meta: {
							status: 'info',
							msg: res.__("taskHistory.success.fetch")
						}
					});
	  			});
	  		}
	  	)
	  	.put( 
	  		function(req, res, next) {
	  			models.History.findById(parseInt(req.params.historyId)).then(function(history){
	  				return history.updateAttributes(req.body.history);
	  			}).then(function(history){
	  				res.json({
						history : history,
						meta: {
							status: 'success',
							msg: res.__("taskHistory.success.update")
						}
					});
	  			});
	  		}
	  	)
	  	.delete( 
	  		function(req, res, next) {
	  			models.History.findById(parseInt(req.params.historyId)).then(function(history){
	  				return history.destroy();
	  			}).then(function(history){
	  				res.json({
	  					history: history,
	  					meta: {
	  						status: 'success',
							msg: res.__("taskHistory.success.delete")
						}
	  				})
	  			});
	  		}
	  	)

	return router;
}

