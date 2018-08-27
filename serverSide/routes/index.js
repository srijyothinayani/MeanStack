var express = require('express'),
    router = express.Router();
router.get('/', function (req, res, next) {
    res.send('This is talentscreen version one');
});
router.use('/employees', require('./employeesRouter'));
router.use('/performance', require('./performanceRoute'));
router.use('/reviewsRoute', require('./reviewsRoute'));

module.exports = router;