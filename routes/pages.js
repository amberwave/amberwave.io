const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('pages/index', {
      path: '/',
      pageTitle: 'Amber Wave',
      isOpen: false
    });
});

module.exports = router;

//    res.sendFile(path.join(rootDir, 'views', 'shop.html')); // automatically builds the absolute path