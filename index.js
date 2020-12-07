const http = require('http');
const hp = require('./hp');
const HOST = '127.0.0.1';
const PORT = 9999;

const server = http.createServer(hp);

server.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
