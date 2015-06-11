var express = require('express');
var router = express.Router({mergeParams: true});

module.exports = function(models) {

	router.route('/:userId')
		.get( 
			function(req, res, next) {
				models.User.findById(parseInt(req.user.id)).then(function(user) {
					if(user){
						res.json({
							msg : res.__("user.success.fetch"),
							data : user
						})
					}else{
				  		res.status(200).json({
							msg : res.__("user.fail.fetch"),
							data : null
						});
				  	}
				})
	  		}
	  	)

	return router;
}

