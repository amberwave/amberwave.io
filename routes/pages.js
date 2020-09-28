const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('pages/index', {
      path: '/',
      pageTitle: 'Amber Wave',
      isOpen: false
    });
});

router.get('/overview', (req, res, next) => {
  res.render('pages/overview', {
    path: '/overview',
    pageTitle: 'Overview'
  });
});

router.get('/demo', (req, res, next) => {
  res.render('pages/demo', {
    path: '/demo',
    pageTitle: 'Demo'
  });
});

router.get('/about', (req, res, next) => {
  res.render('pages/about', {
    path: '/about',
    pageTitle: 'About Us'
  });
});

router.get((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
});

module.exports = router;

//    res.sendFile(path.join(rootDir, 'views', 'shop.html')); // automatically builds the absolute path