var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    employeesSchema = new Schema({
        employee_name: {type: String},
        designation: {type: String},
        employee_id: {type: Number},
        team: {type: String},
        department: {type: String},
        level:{type: Number},
        start_date:{type: Date},
        experience: {type: Number},
        skills:[],
        reviewers: [],
        attemptedQuizes: {type: Number}
    }),

    employeesSchemaModel = mongoose.model('employees', employeesSchema);

function CommonModel() {
    this.cm = employeesSchemaModel;
}
CommonModel.prototype.get = function (req, callback) {
    this.cm.find({}, callback);
};
CommonModel.prototype.getId = function (req, callback) {
    this.cm.findOne({_id: req.params.id}, callback);
};
CommonModel.prototype.create = function (req, callback) {
    this.cm.create(req.body, callback);
};
CommonModel.prototype.update = function (req, data, callback) {
    this.cm.update({_id: req.params.id}, data, {multi: true}, callback);
};
CommonModel.prototype.remove = function (req, callback) {
    this.cm.remove({_id: req.params.id}, callback);
};


module.exports = CommonModel;