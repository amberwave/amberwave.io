exports.getTest = (req, res, next) => {
    res.render('Test', { pageTitle: 'Tailwind Test Page' });
};