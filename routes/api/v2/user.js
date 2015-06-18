var express = require('express');
var router = express.Router({mergeParams: true});
var _ = require("underscore");

module.exports = function(models) {

	router.route('/')
		.get(
			function(req, res){
				var params = {
					include : [{ all: true }]
				};
				if(req.query.hasOwnProperty("ids")){
					req.query.id = req.query.ids;
					delete req.query.ids;
				}
				if(req.query.hasOwnProperty("page")){
					var page = req.query.page;
					params.offset = (req.query.page-1)*req.query.per_page;
					delete req.query.page;
				}
				if(req.query.hasOwnProperty("per_page")){
					params.limit = req.query.per_page;
					delete req.query.per_page;
				}
				if(req.query.hasOwnProperty("order")){
					params.order = req.query.order;
					delete req.query.order;
				}

				params.where =  req.query;
								
				models.User.findAndCountAll(params).then(function(users) {
					var parsed = [];
					_.each(users.rows, function(element) {
						element = element.get({ plain: true });
						element.accounts = _.pluck(element.Accounts, 'id');
						delete element.Accounts;
						parsed.push(element);
					});
					res.json({
						users : parsed,
						meta: {
							page: page,
							per_page: params.limit,
							total_pages: Math.ceil(users.count/params.limit),
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
				models.User.findById(parseInt(req.params.userId)).then(function(user) {
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
				models.User.findById(parseInt(req.params.userId)).then(function(user) {
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
							msg: res.__("user.success.delete")
						}
					});
				})
	  		}
	  	)

	return router;
}

