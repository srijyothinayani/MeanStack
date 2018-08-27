var mongoose = require('mongoose'),
Schema = mongoose.Schema,
reviewerSchema = new Schema({
    employee_name: {type: String},
    team: {type: String},
    reviews: {type: Num},
    reviewers:[]
}),

reviewerSchemaModel = mongoose.model('reviewer', reviewerSchema);
function ReviewersModel() {
this.cm = reviewerSchemaModel;
}
ReviewersModel.prototype.get = function (req, callback) {
this.cm.find({}, callback);
};
ReviewersModel.prototype.getId = function (req, callback) {
this.cm.findOne({_id: req.params.id}, callback);
};
ReviewersModel.prototype.create = function (req, callback) {
this.cm.create(req.body, callback);
};
ReviewersModel.prototype.update = function (req, data, callback) {
this.cm.update({_id: req.params.id}, data, {multi: true}, callback);
};
ReviewersModel.prototype.remove = function (req, callback) {
this.cm.remove({_id: req.params.id}, callback);
};


module.exports = ReviewersModel;