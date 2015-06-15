var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
var _ = require("underscore");
var join = Promise.join;

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dumingagebpls@gmail.com',
        pass: 'elguebpls'
    }
});


module.exports = function(models, io) {

	router.route('/')
		.get(
			function(req, res, next){
				if(req.query.hasOwnProperty("ids")){
					req.query.id = req.query.ids;
					delete req.query.ids;
				}
				
				models.Account.findAll({where: req.query, include: [{ all: true }]}).then(function(accounts) {
					var parsed = [];
					_.each(accounts, function(element) {
						element = element.get({ plain: true });
						element.projects = _.pluck(element.Projects, 'id');
						delete element.Projects;
						parsed.push(element);
					});
					res.json({
						accounts: parsed,
						meta: {
							status: 'info',
							msg: res.__("account.success.fetch")
						}
					});
				})
			}
		)
	  	.post(
	  		function(req, res, next) {
	  			models.Account.create(req.body.account).then(function(account) {
					res.json({
						account : account,
						meta: {
							status: 'success',
							msg: res.__("account.success.create")
						}
					});
				})
	  		}
	  	)

	router.route('/:accountId')
		.get( 
	  		function(req, res, next) {
	  			models.Account.findOne({ where: {id: req.params.accountId}, include: [ {all: true} ]  }).then(function(account){
  					parsed = account.get({ plain: true });
					parsed.projects = _.pluck(parsed.Projects, 'id');
					delete parsed.Projects;

  					res.json({
  						account: parsed,
  						meta: {
  							status: 'info',
							msg: res.__("account.success.fetch")
						}
  					})
	  			})
	  		}
	  	)
	  	.put(
	  		function(req, res, next) {
	  			models.Account.findById(parseInt(req.params.accountId)).then(function(account){
	  				return account.updateAttributes(req.body.account);
	  			}).then(function(account){
	  				res.json({
	  					account: account,
	  					meta: {
	  						status: 'success',
							msg: res.__("account.success.update")
						}
	  				})
	  			});
	  		}
	  	)
	  	.delete(
	  		function(req, res, next) {
	  			models.Account.findById(parseInt(req.params.accountId)).then(function(account){
	  				return account.destroy();
	  			}).then(function(account){
	  				res.json({
	  					account: account,
	  					meta: {
	  						status: 'delete',
							msg: res.__("account.success.delete")
						}
	  				})
	  			});
	  		}
	  	)
	  	
	return router;
}

