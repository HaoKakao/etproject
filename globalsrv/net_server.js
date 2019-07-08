var colors = require('colors');
const net = require('net');
const port = 7070;
const host = '127.0.0.1';

function infoLog(type, mod, text = '', other = ''){
	if(text){
        let operatorText = text.toLowerCase();
		if(operatorText == 'success'){
			text = ' - ' + colors.green(text);
		} else if(operatorText == 'error') {
			text = ' - ' + colors.red(text);
		} else {
			text = ' - ' + text;	
		}
	}

	if(other){
		other = ' - ' + colors.grey(other);
	}

    let operatorType = type.toLowerCase();
	switch (operatorType) {
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



const server = net.createServer();
server.listen(port, host, () => {
    infoLog('global', 'Boot server', 'success', 'TCP Server is running on port ' + port + '.');
});

let sockets = [];

server.on('connection', function(sock) {
    infoLog('client', 'Connection', 'success');

    sockets.push(sock);

    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to all the connected, the client will receive it as data from the server
        sockets.forEach(function(sock, index, array) {
            sock.write(sock.remoteAddress + ':' + sock.remotePort + " said " + data + '\n');
        });
    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        let index = sockets.findIndex(function(o) {
            return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
        })
        if (index !== -1) sockets.splice(index, 1);
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });

    sock.on('error', function(err) {
       console.log('error:', err);
    });
});