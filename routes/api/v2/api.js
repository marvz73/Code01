var express = require('express');
var router = express.Router();

// router.all('*', isAuthenticated)

module.exports = function(models, io) {

    var user = require('./user.js')(models, io);
    router.use('/users', user);

    var account = require('./account.js')(models, io);
    router.use('/accounts', account);

    var accountUser = require('./accountUser.js')(models, io);
    router.use('/accountUsers', accountUser);

    var project = require('./project.js')(models, io);
    router.use('/projects', project);

    var task = require('./task.js')(models, io);
    router.use('/tasks', task);

    var history = require('./taskHistory.js')(models, io);
    router.use('/histories', history);

    var taskComment = require('./taskComment.js')(models, io);
    router.use('/comments', taskComment);

    var attachment = require('./attachment.js')(models, io);
    router.use('/attachments', attachment);

	return router;
}


function isAuthenticated(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.sendStatus(403);
}

function isNotAuthenticated(req, res, next) {
    if (!req.isAuthenticated())
        return next();

    res.redirect('/profile');
}