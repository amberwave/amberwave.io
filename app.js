const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();
const livereload = require("livereload");

app.set('view engine', 'ejs');
app.set('views', 'views');

const liveReloadServer = livereload.createServer();
const connectLivereload = require("connect-livereload");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const testRoutes = require('./routes/test');

liveReloadServer.watch(path.join(__dirname, 'public'));

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

app.use(connectLivereload());

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use(testRoutes);

app.use(errorController.get404);

app.listen(8080); // creates server