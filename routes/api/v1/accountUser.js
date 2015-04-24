var express = require('express');
var router = express.Router({mergeParams: true});


module.exports = function(models) {

	router.route('/')
		.post( 
			function(req, res, next) {
	  			new dbmodel.AccountUser(req.body).save().then(function(accountUser_model) {
	        		if(accountUser_model){
	        			res.json(accountUser_model.toJSON());
	        		}
				  	else{
				  		res.json(null);
				  	}
				});
	  		}
	  	)

	router.route('/:accountUserId')
		.get( 
			function(req, res, next) {
				// models.AccountUser.find({ where: {'id': req.params.accountUserId, 'AccountId': req.params.accountId} }).then(function(AccountUser) {
				// 	if(AccountUser){
				// 		res.json(AccountUser)			
				// 	}else{
				//   		res.json(null);
				//   	}
				// })

	  	// 		new dbmodel.AccountUser({'id': req.params.accountUserId}).fetch().then(function(accountUser_model) {
	   //      		if(accountUser_model){
	   //      			res.json(accountUser_model.toJSON());
	   //      		}
				//   	else{
				//   		res.json(null);
				//   	}
				// });
	  		}
	  	)
	  	.post( 
			function(req, res, next) {
				req.body.id = req.params.accountUserId;
	  			new dbmodel.AccountUser(req.body).save().then(function(accountUser_model) {
	        		if(accountUser_model){
	        			res.json(accountUser_model.toJSON());
	        		}
				  	else{
				  		res.json(null);
				  	}
				});
	  		}
	  	)
	  	.delete( 
			function(req, res, next) {
	  			new dbmodel.AccountUser({id: req.params.accountUserId}).destroy().then(function(accountUser_model) {
	        		if(accountUser_model){
	        			res.json(accountUser_model.toJSON());
	        		}
				  	else{
				  		res.json(null);
				  	}
				});
	  		}
	  	)

	return router;
}

