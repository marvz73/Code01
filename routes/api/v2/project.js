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
				
				models.Project.findAll({where: req.query, include: [{ all: true}]}).then(function(projects) {
					var parsed = [];
					_.each(projects, function(element) {
						element = element.get({ plain: true });
						element.tasks = _.pluck(element.Tasks, 'id');
						delete element.Tasks;
						parsed.push(element);
					});
					res.json({
						projects: parsed
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
	  			models.Project.findOne({ where: {id: req.params.projectId}, include: [ {all: true} ]  }).then(function(project){
	  				parsed = project.get({ plain: true });
					parsed.tasks = _.pluck(parsed.Tasks, 'id');
					delete parsed.Tasks;
					parsed.attachment = parsed.Attachment;
					delete parsed.Attachment;

  					res.json({
  						project: parsed
  					})
	  			});
	  		}
	  	)
	  	.put( 
	  		function(req, res, next) {
	  			models.Project.findById(parseInt(req.params.projectId)).then(function(project){
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
	  			models.Project.findById(parseInt(req.params.projectId)).then(function(project){
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

