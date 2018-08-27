var express = require('express'),
    ReviewsController =require('../controllers/ReviewsController.js'),
reviewsRoute = express.Router(),
cc = new ReviewsController();

reviewsRoute.get('/',cc.getAll.bind(cc));
reviewsRoute.get('/:id', cc.getById.bind(cc));
reviewsRoute.post('/', cc.create.bind(cc));
reviewsRoute.put('/:id', cc.update.bind(cc));
reviewsRoute.delete('/:id', cc.remove.bind(cc));

module.exports = reviewsRoute;