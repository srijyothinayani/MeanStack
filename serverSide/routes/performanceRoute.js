var express = require('express'),
    PerformanceController=require('../controllers/PerformanceController.js'),
performanceRoute = express.Router(),
cc = new PerformanceController();

performanceRoute.get('/',cc.getAll.bind(cc));
performanceRoute.get('/:id', cc.getById.bind(cc));
performanceRoute.post('/', cc.create.bind(cc));
performanceRoute.put('/:id', cc.update.bind(cc));

module.exports = performanceRoute;