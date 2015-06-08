var express = require('express');
var router = express.Router({mergeParams: true});
var Promise = require("bluebird");
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
				models.Account.findAll({where: req.query, include: [{ all: true }]}).then(function(accounts) {
					res.json({
						accounts: accounts
					});
				})
			}
		)
	  	.post(
	  		function(req, res, next) {
	  			models.Account.create(req.body.account).then(function(account) {
					res.json({
						account : account
					});
				})
	  		}
	  	)

	router.route('/:accountId')
		.get( 
	  		function(req, res, next) {
	  			models.Account.findById(parseInt(req.params.accountId)).then(function(account){
  					res.json({
  						account: account
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
	  					account: account
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
	  					account: account
	  				})
	  			});
	  		}
	  	)
	  	
	return router;
}

