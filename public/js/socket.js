var socket = io.connect(baseUrl + namespace);

socket.on('connect', function(){
	socket.emit('chat', 'dscvdfv');
})

//account events
socket.on('accountCreate', function(data){
	console.log(data);
})

socket.on('accountUpdate', function(data){
	console.log(data);
})

socket.on('accountDelete', function(data){
	console.log(data);
})

//project events
socket.on('projectCreate', function(data){
	console.log(data);
})

socket.on('projectUpdate', function(data){
	console.log(data);
})

socket.on('projectDelete', function(data){
	console.log(data);
})

//task events
socket.on('taskCreate', function(data){
	console.log(data);
})

socket.on('taskUpdate', function(data){
	console.log(data);
})

socket.on('taskDelete', function(data){
	console.log(data);
})

//task history events
socket.on('taskHistoryCreate', function(data){
	console.log(data);
})

socket.on('taskHistoryUpdate', function(data){
	console.log(data);
})

socket.on('taskHistoryDelete', function(data){
	console.log(data);
})

//task comment events
// socket.on('taskCommentCreate', function(data){
// 	console.log(data);
// })

socket.on('taskCommentUpdate', function(data){
	console.log(data);
})

socket.on('taskCommentDelete', function(data){
	console.log(data);
})
