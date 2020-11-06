const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('welcome', {
        pageTitle: 'Welcome',
        path: '/'
    })
});

router.get('/search', (req, res, next) => {
    res.render('search', {
        pageTitle: 'Search Database',
        path: '/search'
    });
});


module.exports = router;