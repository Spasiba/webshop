const jsonServer = require('json-server');
const auth  = require('json-server-auth')
const cors  = require('cors')
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
    static: './build'
});
const PORT  = process.env.PORT || 8080;
server.use(middlewares);

server.use(cors())
server.use(jsonServer.rewriter({
    '/api/*' : '/$1',
}));
const rules = auth.rewriter({
    user: 600,
    messages: 640
})

server.db = router.db

server.use(rules)
server.use(auth)
server.use(router);
server.listen(PORT, () => {
    console.log('Server is running');
})

