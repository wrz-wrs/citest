var http = require('http');

http.createServer(function (req, res) {
    res.write('hello world ci-test');
    res.end();
}).listen(8963);

console.log('??hell');
