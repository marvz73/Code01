var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var join = Promise.join;

module.exports = function(models, io) {

	router.route('/')
		.get(
			function(req, res, next){
				models.Project.findAll({include: [{ all: true }]}).then(function(projects) {
					res.json({
						projects: projects
					});
				})
			}
		)
	  	.post(
	  		function(req, res, next) {
	  			models.Project.create(req.body.project).then(function(project) {
					res.json({
						project : project
					});
				})
	  		}
	  	)

	router.route('/:projectId')
		.get( 
	  		function(req, res, next) {
	  			models.Project.find(parseInt(req.params.projectId)).then(function(project){
	  				res.json({
						project : project
					});
	  			});
	  		}
	  	)
	  	.put( 
	  		function(req, res, next) {
	  			models.Project.find(parseInt(req.params.projectId)).then(function(project){
	  				return project.updateAttributes(req.body.project);
	  			}).then(function(project){
	  				res.json({
						project : project
					});
	  			});
	  		}
	  	)
	  	.delete( 
	  		function(req, res, next) {
	  			models.Project.find(parseInt(req.params.projectId)).then(function(project){
	  				return project.destroy();
	  			}).then(function(project){
	  				res.json({
	  					project: project
	  				})
	  			});
	  		}
	  	)

	return router;
}

