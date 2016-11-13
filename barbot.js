const http = require('http');

var orders = [{'table': 1, 'drink': "red bull"}];
		/*{'table': 4, 'drink': "red bull"},
		{'table': 3, 'drink': "red bull"},
		{'table': 2, 'drink': "red bull"},
		{'table': 5, 'drink': "red bull"},
		{'table': 3, 'drink': "red bull"},
		{'table': 4, 'drink': "red bull"}];
*/
const server = http.createServer((req, res) => {
	if(orders.length>0){
		res.end(orders.shift()["table"].toString());
	}
	else{
		res.end('HTTP/1.1 200 OK\n\n\n');
	}
});

server.listen(8081, function(){
	console.log("Servering...\n");
});
