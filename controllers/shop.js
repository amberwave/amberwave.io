exports.getShop = (req, res, next) => {
    res.render('/', {
      pageTitle: 'Shop',
      path: '/',
      isOpen: false,
      styleCSS: true,
      activeShop: true
    });
}