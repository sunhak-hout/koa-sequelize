require('dotenv/config');
const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('./router');

const app = new Koa();

// Middlware: parsing ctx.request.body into JSON
app.use(koaBody());

// Middleware: init all routing endpoints
app.use(router.routes());

app.listen(5000, () => console.log(`App running on port: 5000`));
