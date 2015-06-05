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

	router.route('/')
		.get(
			function(req, res){
				models.User.findAll().then(function(users) {
					res.json({
						users : users
					});
				})
			}
		)
	  	.post( 
			function(req, res, next) {
				models.User.create(req.body.user).then(function(user) {
					res.json({
						user : user
					});
				})
	  		}
	  	)

	router.route('/:userId')
		.get( 
			function(req, res, next) {
				models.User.find(parseInt(req.params.userId)).then(function(user) {
					res.json({
						user : user
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
						user : user
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
						user : user
					});
				})
	  		}
	  	)

	
	// var account = require('./account.js')(passport, dbmodel);
	// router.use('/account/:accountId', account);

	return router;
}

