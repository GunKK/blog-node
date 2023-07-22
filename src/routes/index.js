const homeRouter = require('./home');
const postRouter = require('./post');
const meRouter = require('./me');
const commentRouter = require('./comment');

function route(app) {
    app.use('/', homeRouter);
    app.use('/post', postRouter);
    app.use('/account', meRouter);
    app.use('/comment', commentRouter);
}

module.exports = route;
