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


module.exports = function(models) {
	router.param('userId', /^\d+$/);

	router.route('/:userId')
		.get( 
			function(req, res, next) {
				models.User.find(req.params.userId).then(function(user) {
					if(user){
						res.json(user)
					}else{
				  		res.json(null);
				  	}
				})
	  		}
	  	)

	router.route('/:userId/accounts')
		.get( 
			function(req, res, next) {
				models.User.find(req.params.userId).then(function(user) {
					if(user){
						user.getAccounts().then(function(accounts){
							res.json(accounts)
						})
					}else{
				  		res.json(null);
				  	}
				})
	  		}
	  	)

	
	// var account = require('./account.js')(passport, dbmodel);
	// router.use('/account/:accountId', account);

	return router;
}

