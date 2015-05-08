var express = require('express');
var router = express.Router({mergeParams: true});

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

	router.route('/:userId')
		.get( 
			function(req, res, next) {
				models.AccountUser.find({ where: {'UserId': req.params.userId, 'AccountId': req.params.accountId} }).then(function(AccountUser) {
					if(AccountUser){
						models.Account.find(req.params.accountId).then(function(account) {
							if(account){
								models.User.find(req.user.id).then(function(user) {
									if(user){
										user.hasAccount(account).then(function(result){
											if(result){
												res.json({
													msg : res.__("accountUser.success.fetch"),
													data : AccountUser
												})	
											}else{
												res.status(404).json({
													msg : res.__("accountUser.fail.fetch"),
													data : AccountUser
												})
											}
										})
									}else{
								  		res.status(404).json({
											msg : res.__("accountUser.fail.fetch"),
											data : null
										});
								  	}
								})						
							}else{
						  		res.status(404).json({
									msg : res.__("accountUser.fail.fetch"),
									data : null
								});
						  	}
						})		
					}else{
				  		res.status(404).json({
							msg : res.__("accountUser.fail.fetch"),
							data : null
						});
				  	}
				})
	  		}
	  	)
	  	.post( 
			function(req, res, next) {
				models.Account.find(req.params.accountId).then(function(account) {
					if(account){
						models.User.find(req.params.userId).then(function(user) {
							if(user){
								account.addUser(User).then(function(result){
									if(result){
										res.json({
											msg : res.__("accountUser.success.update"),
											data : account
										})	
									}else{
										res.status(404).json({
											msg : res.__("accountUser.fail.update"),
											data : null
										});
									}
								})
							}else{
						  		res.status(404).json({
									msg : res.__("accountUser.fail.update"),
									data : null
								});
						  	}
						})						
					}else{
				  		res.status(404).json({
							msg : res.__("accountUser.fail.update"),
							data : null
						});
				  	}
				})
	  		}
	  	)
	  	.delete( 
			function(req, res, next) {
				models.AccountUser.find({ where: {'UserId': req.params.userId, 'AccountId': req.params.accountId} }).then(function(AccountUser) {
					if(AccountUser){
						models.Account.find(req.params.accountId).then(function(account) {
							if(account){
								models.User.find(req.user.id).then(function(user) {
									if(user){
										user.hasAccount(account).then(function(result){
											if(result){
												AccountUser.destroy().then(function(){
													res.json({
														msg : res.__("accountUser.success.delete"),
														data : AccountUser
													})	
												})
											}else{
												res.status(404).json({
													msg : res.__("accountUser.fail.delete"),
													data : null
												});
											}
										})
									}else{
								  		res.status(404).json({
											msg : res.__("accountUser.fail.delete"),
											data : null
										});
								  	}
								})						
							}else{
						  		res.status(404).json({
									msg : res.__("accountUser.fail.delete"),
									data : null
								});
						  	}
						})		
					}else{
				  		res.status(404).json({
							msg : res.__("accountUser.fail.delete"),
							data : null
						});
				  	}
				})
	  		}
	  	)

	return router;
}

