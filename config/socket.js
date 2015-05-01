// expose this function to our app using module.exports
module.exports = function(io, model) {
    io.on('connection', function (socket) {
      // socket.on('task', function(data){
      //   socket.broadcast.emit('taskBroadcast', data);
      // })

    	socket.on('switchRoom', function(room){
    		socket.join(room);
    		socket.room = room;
    	})


    });
	

 
 	return io;
};
