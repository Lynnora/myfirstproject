const Server = require('./server.js');
const Router = require('./router.js');

const server = new Server();
const router = new Router(server.app);

server.start();
router.register();
