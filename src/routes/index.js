const homeRouter = require('./home');
const postRouter = require('./post');
const meRouter = require('./me');

function route(app) {
    app.use('/', homeRouter);
    app.use('/post', postRouter);
    app.use('/account', meRouter);
}

module.exports = route;
