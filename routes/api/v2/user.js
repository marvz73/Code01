var express = require('express');
var router = express.Router({mergeParams: true});
var _ = require("underscore");

module.exports = function(models) {

	router.route('/')
		.get(
			function(req, res){
				if(req.query.hasOwnProperty("ids")){
					req.query.id = req.query.ids;
					delete req.query.ids;
				}
				
				models.User.findAll({where: req.query, include: [{ all: true }]}).then(function(users) {
					var parsed = [];
					_.each(users, function(element) {
						element = element.get({ plain: true });
						element.accounts = _.pluck(element.Accounts, 'id');
						delete element.Accounts;
						parsed.push(element);
					});
					res.json({
						users : parsed,
						meta: {
							status: 'info',
							msg: res.__("user.success.fetch")
						}
					});
				})
			}
		)
	  	.post( 
			function(req, res, next) {
				models.User.create(req.body.user).then(function(user) {
					res.json({
						user : user,
						meta: {
							status: 'success',
							msg: res.__("user.success.create")
						}
					});
				})
	  		}
	  	)

	router.route('/:userId')
		.get( 
			function(req, res, next) {
				models.User.findOne({ where: {id: req.params.userId}, include: [ {all: true} ]  }).then(function(user){
  					parsed = user.get({ plain: true });
					parsed.accounts = _.pluck(parsed.Accounts, 'id');
					delete parsed.Accounts;
					res.json({
						user : user,
						meta: {
							status: 'info',
							msg: res.__("user.success.fetch")
						}
					});
				})
	  		}
	  	)
	  	.put( 
			function(req, res, next) {
				models.User.find(parseInt(req.params.userId)).then(function(user) {
					if(user){
						return user.updateAttributes(req.body.user)
					}else{
				  		return null;
				  	}
				}).then(function(user){
					res.json({
						user : user,
						meta: {
							status: 'success',
							msg: res.__("user.success.update")
						}
					});
				})
	  		}
	  	)
	  	.delete( 
			function(req, res, next) {
				models.User.find(parseInt(req.params.userId)).then(function(user) {
					if(user){
						return user.destroy()
					}else{
				  		return null;
				  	}
				}).then(function(user){
					res.json({
						user : user,
						meta: {
							status: 'success',
							msg: res.__("user.success.create")
						}
					});
				})
	  		}
	  	)

	return router;
}

