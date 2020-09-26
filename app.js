const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const livereload = require("livereload");

app.set('view engine', 'ejs');
app.set('views', 'views');

const liveReloadServer = livereload.createServer();
const connectLivereload = require("connect-livereload");

const pagesRoutes = require('./routes/pages');

liveReloadServer.watch(path.join(__dirname, 'public'));

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

app.use(connectLivereload());

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(pagesRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
});

app.listen(8080); // creates server