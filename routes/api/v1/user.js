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
				models.User.find(parseInt(req.user.id)).then(function(user) {
					if(user){
						res.json({
							msg : res.__("user.success.fetch"),
							data : user
						})
					}else{
				  		res.status(404).json({
							msg : res.__("user.fail.fetch"),
							data : null
						});
				  	}
				})
	  		}
	  	)

	
	// var account = require('./account.js')(passport, dbmodel);
	// router.use('/account/:accountId', account);

	return router;
}

