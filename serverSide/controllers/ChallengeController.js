var ChallengesModel = require('../model/commonModel');

function ChallengeController() {
    this.model = new ChallengesModel();
}
ChallengeController.prototype.getAll = function (req, res) {
    this.model.get(req,function(err,data){
        res.status(200).json(data);
    });
    console.log("info at ChallengesController getAll method and req goes to controllerUtil function");
};
ChallengeController.prototype.getById = function (req, res, next) {
    console.log( req.params);
    this.model.getId(req,function(err,data){
        res.status(200).json(data);
    });
    console.log("info at ChallengesController getById method and req goes to controllerUtil function");
};
ChallengeController.prototype.create = function (req, res, next) {
    this.model.create(req,function(err,data){
        res.status(201).json(data);
    });
    console.log("info at ChallengesController getById method and req goes to controllerUtil function");
};

ChallengeController.prototype.update = function (req, res, next) {
    console.log("info at getById method in ChallengesController.", req);
    this.model.update(req,function(err,data){
        res.status(200).json(data);
    });
    console.log("info at ChallengesController getById method and req goes to controllerUtil function");
};
ChallengeController.prototype.remove = function (req, res, next) {
    console.log("info at getById method in ChallengesController.", req);
    this.model.remove(req,function(err,data){
        res.status(204).json(data);
    });
    console.log("info at ChallengesController getById method and req goes to controllerUtil function");
};

module.exports = ChallengeController;