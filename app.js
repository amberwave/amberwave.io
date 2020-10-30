const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public/assets')); // Serves public assets folder
app.use(express.static(__dirname + '/public')); // Serves public assets folder
app.set('views', [__dirname + '/views', __dirname + '/views/personal']);

// API Data Streams
app.use(express.json());

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const apiRoutes = require('./routes/api');
app.set('etag', false); // turn off

//Routes
app.use('/', require('./routes/index'));
app.use(apiRoutes);


const PORT = process.env.PORT || 8080;
const APP_PORT = process.env.APP_PORT;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
console.log(`Browser access at port ${APP_PORT}`);