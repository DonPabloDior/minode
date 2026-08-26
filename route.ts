import http from 'http';
import getUsers from './controller.js';
const server = http.createServer((req, res) => {
    const fullUrl = `http://${req.headers.host}${req.url}`;
    const parsedUrl = new URL(fullUrl);
// GET endpoint
    if(parsedUrl.pathname == '/users' && req.method === 'GET') {
        console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
        getUsers(req, res, 1);
    }
})

export default server;