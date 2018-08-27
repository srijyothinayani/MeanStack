var mongoose = require('mongoose'),
Schema = mongoose.Schema,
performanceSchema = new Schema({
    employee_name: {type: String},
    team: {type: String},
    review_rating: {type: Number}
}),

performanceSchemaModel = mongoose.model('performance-review', performanceSchema);
function PerformanceModel() {
this.cm = performanceSchemaModel;
}
PerformanceModel.prototype.get = function (req, callback) {
this.cm.find({}, callback);
};
PerformanceModel.prototype.getId = function (req, callback) {
this.cm.findOne({_id: req.params.id}, callback);
};
PerformanceModel.prototype.create = function (req, callback) {
this.cm.create(req.body, callback);
};
PerformanceModel.prototype.update = function (req, data, callback) {
this.cm.update({_id: req.params.id}, data, {multi: true}, callback);
};
PerformanceModel.prototype.remove = function (req, callback) {
this.cm.remove({_id: req.params.id}, callback);
};


module.exports = PerformanceModel;