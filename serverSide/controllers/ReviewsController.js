var ReviewsModel = require('../model/ReviewersModel');

function ReviewsController() {
    this.model = new ReviewsModel();
}
ReviewsController.prototype.getAll = function (req, res) {
    this.model.get(req,function(err,data){
        res.status(200).json(data);
    });
};
ReviewsController.prototype.getById = function (req, res, next) {
    console.log( req.params);
    this.model.getId(req,function(err,data){
        res.status(200).json(data);
    });
};
ReviewsController.prototype.create = function (req, res, next) {
    this.model.create(req,function(err,data){
        res.status(201).json(data);
    });
};

ReviewsController.prototype.update = function (req, res, next) {
    console.log("info at getById method in ChallengesController.", req);
    this.model.update(req,function(err,data){
        res.status(200).json(data);
    });
};
ReviewsController.prototype.remove = function (req, res, next) {
    console.log("info at getById method in ChallengesController.", req);
    this.model.remove(req,function(err,data){
        res.status(204).json(data);
    });
};

module.exports = ReviewsController;