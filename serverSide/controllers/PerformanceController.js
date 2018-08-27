var performanceModel = require('../model/performanceModel');

function PerformanceController() {
    this.model = new performanceModel();
}
PerformanceController.prototype.getAll = function (req, res) {
    this.model.get(req,function(err,data){
        res.status(200).json(data);
    });
    console.log("info at ChallengesController getAll method and req goes to controllerUtil function");
};
PerformanceController.prototype.getById = function (req, res, next) {
    console.log( req.params);
    this.model.getId(req,function(err,data){
        res.status(200).json(data);
    });
};
PerformanceController.prototype.create = function (req, res, next) {
    this.model.create(req,function(err,data){
        res.status(201).json(data);
    });
};

PerformanceController.prototype.update = function (req, res, next) {
    console.log("info at getById method in ChallengesController.", req);
    this.model.update(req,function(err,data){
        res.status(200).json(data);
    });
};
PerformanceController.prototype.remove = function (req, res, next) {
    console.log("info at getById method in ChallengesController.", req);
    this.model.remove(req,function(err,data){
        res.status(204).json(data);
    });
};

module.exports = PerformanceController;