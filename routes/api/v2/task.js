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
				
				models.Task.findAll({where: req.query, include: [{ all: true }]}).then(function(tasks) {
					var parsed = [];
					_.each(tasks, function(element) {
						element = element.get({ plain: true });
						element.attachments = _.pluck(element.Attachments, 'id');
						delete element.Attachments;
						element.comments = _.pluck(element.Comments, 'id');
						delete element.Comments;
						element.histories = _.pluck(element.Histories, 'id');
						delete element.Histories;
						parsed.push(element);
					});
					res.json({
						tasks: parsed,
						meta: {
							status: 'info',
							msg: res.__("task.success.fetch")
						}
					});
				})
			}
		)
	  	.post(
	  		function(req, res, next) {
	  			models.Task.create(req.body.task).then(function(task) {
					res.json({
						task : task,
						meta: {
							status: 'success',
							msg: res.__("task.success.create")
						}
					});
				})
	  		}
	  	)

	router.route('/:taskId')
		.get( 
	  		function(req, res, next) {
	  			models.Task.findOne({ where: {id: req.params.taskId}, include: [ {all: true} ]  }).then(function(task){
	  				parsed = task.get({ plain: true });
					parsed.attachments = _.pluck(parsed.Attachments, 'id');
					delete parsed.Attachments;
					parsed.comments = _.pluck(parsed.Comments, 'id');
					delete parsed.Comments;
					parsed.histories = _.pluck(parsed.Histories, 'id');
					delete parsed.Histories;
	  				res.json({
						task : parsed,
						meta: {
							status: 'info',
							msg: res.__("task.success.fetch")
						}
					});
	  			});
	  		}
	  	)
	  	.put( 
	  		function(req, res, next) {
	  			models.Task.findById(parseInt(req.params.taskId)).then(function(task){
	  				return task.updateAttributes(req.body.task);
	  			}).then(function(task){
	  				res.json({
						task : task,
						meta: {
							status: 'success',
							msg: res.__("task.success.update")
						}
					});
	  			});
	  		}
	  	)
	  	.delete( 
	  		function(req, res, next) {
	  			models.Task.findById(parseInt(req.params.taskId)).then(function(task){
	  				return task.destroy();
	  			}).then(function(task){
	  				res.json({
	  					task: task,
	  					meta: {
	  						status: 'success',
							msg: res.__("task.success.delete")
						}
	  				})
	  			});
	  		}
	  	)

	return router;
}

