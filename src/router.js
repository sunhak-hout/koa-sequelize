const Router = require('koa-router');
const RootController = require('./controllers/RootController');
const UsersController = require('./controllers/UsersController');
const PostsController = require('./controllers/PostsController');

const router = new Router();
router.get('/', RootController.root);

router.get('/users', UsersController.list);
router.post('/users/login', UsersController.login);
router.post('/users/sign-up', UsersController.signup);

router.get('/posts', PostsController.list);
router.post('/posts', PostsController.create);
router.del('/posts/:id', PostsController.delete);

module.exports = router;
