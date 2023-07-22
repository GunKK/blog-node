const express = require('express');
const engine = require('ejs-mate');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const flash = require('connect-flash');
const methodOverride = require('method-override');

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.use(bodyParser.json());
app.use(methodOverride('_method'))

// static folder
app.use(express.static(path.join(__dirname, 'public')));
// template ejs 
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('view engine', 'ejs');

app.use(
    session({
        secret: process.env.SESSION_SECRET_KEY,
        saveUninitialized: false,
        resave: false,
        cookie: { maxAge:  1000 * 60 * 60 * 24 * 7}
    }),
);

// app.use(flash());

// app.use(cookieParser());

// middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(function (req, res, next) {
    res.locals.currentUser = req.session.user;
    next();
});

//helpers function 

app.locals.differenceDates = (date) => {
    const updateDate = new Date(date);
    const milliseconds = Date.now() - updateDate.getTime();
    const oneDay = 1000 * 3600 * 24;
    const oneHours = 1000 * 3600;
    const oneMinute = 1000 * 60; 
    if (milliseconds > oneDay) {
        return `${Math.floor(milliseconds/oneDay)} days ago`;
    } else if(milliseconds > oneHours) {
        return `${Math.floor(milliseconds/oneHours)} hours ago`;
    } else {
        return `${Math.floor(milliseconds/oneMinute)} minutes ago`;
    }
}

const route = require('./routes');
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
