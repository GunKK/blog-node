const express = require('express');
const engine = require('ejs-mate');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.engine('ejs', engine);
app.set('views', __dirname + '/resources/views');
app.set('view engine', 'ejs');

const route = require('./routes');

// static folder
app.use(express.static(__dirname + '/public'));

// routes init
route(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serving on port ..... ${port}`);
});
