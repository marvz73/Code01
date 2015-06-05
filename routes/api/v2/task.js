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
	router.param('taskId', /^\d+$/);

	router.route('/')
		router.route('/')
		.get(
			function(req, res, next){
				models.Task.findAll({include: [{ all: true }]}).then(function(tasks) {
					res.json({
						tasks: tasks
					});
				})
			}
		)
	  	.post(
	  		function(req, res, next) {
	  			models.Task.create(req.body.task).then(function(task) {
					res.json({
						task : task
					});
				})
	  		}
	  	)

	router.route('/:taskId')
		.get( 
	  		function(req, res, next) {
	  			models.Task.find(parseInt(req.params.taskId)).then(function(task){
	  				res.json({
						task : task
					});
	  			});
	  		}
	  	)
	  	.put( 
	  		function(req, res, next) {
	  			models.Task.find(parseInt(req.params.taskId)).then(function(task){
	  				return task.updateAttributes(req.body.task);
	  			}).then(function(task){
	  				res.json({
						task : task
					});
	  			});
	  		}
	  	)
	  	.delete( 
	  		function(req, res, next) {
	  			models.Task.find(parseInt(req.params.taskId)).then(function(task){
	  				return task.destroy();
	  			}).then(function(task){
	  				res.json({
	  					task: task
	  				})
	  			});
	  		}
	  	)

	return router;
}

