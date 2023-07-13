const express = require('express');
const engine = require('ejs-mate');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);

app.use(bodyParser.json());

app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('view engine', 'ejs');

// middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const route = require('./routes');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// routes init
route(app);

app.all('*', (req, res, next) => {
    // res.status(404).json({
    //     status: 'fail',
    //     message: `Can not find ${req.originalUrl} on this server`
    // });
    res.render('errors/404');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serving on port ..... ${port}`);
});
