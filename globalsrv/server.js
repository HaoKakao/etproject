var colors = require('colors');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.set('port', 3000);

function infoLog(type, mod, text, other){
	if(text){
		if(text == 'Success'){
			text = ' - ' + colors.green(text);
		} else if(text == 'Error') {
			text = ' - ' + colors.red(text);
		} else {
			text = ' - ' + text;	
		}
	} else {
		text = '';
	}

	if(other){
		other = ' - ' + colors.grey(other);
	} else {
		other = '';
	}

	switch (type) {
		case 'global':
			console.info(colors.magenta.bold('Global: ') + colors.yellow(mod) + text + other);
    		break;
		case 'client':
			console.info(colors.green.bold('Client: ') + colors.yellow(mod) + text + other);
  			break;
		default:
			console.info(colors.red.bold('Wrong parameter - "type"'));
	}
}

function GenerateSessionKey() 
{
    let length = 13,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function addZero(i) 
{
	if (i < 10) 
	{
		i = "0" + i;
	}
	return i;
}

io.on("connection", function(socket)
{

	infoLog('client', 'Connection', 'Success', socket.id);


	
	socket.on("some", function(data)
	{
		infoLog('client', 'Send', 'Success', 'received');
					
	});

    socket.on('disconnect', function() {
        infoLog('client', 'Disconnect', 'Success', socket.id);
    })

});

server.listen(app.get('port'), function()
{
	console.log("======== SERVER IS RUNNING ========");
	infoLog('global', 'Start server', 'Port: ' + app.get('port'));
});
