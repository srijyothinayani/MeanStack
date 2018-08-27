var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    employeesSchema = new Schema({
        employee_name: {type: String},
        designation: {type: String},
        employee_id: {type: Number},
        team: {type: String}
    }),

    performanceSchema = new Schema({
        employee_name: {type: String},
        team: {type: String},
        review_rating: {type: Number}
    }),
    reviewerSchema = new Schema({
        employee_name: {type: String},
        team: {type: String},
        reviews: {type: Num},
        reviewers:[]
    }),

    cacheRoutesSchema = new Schema({
        email: {type: String},
        candidate_id: {type: String},
        user_agent: {},
        questions: [],
        reviewers: [],
        interviewStartDateTime: {type: Date},
        time_taken: {type: Number},
        total_time: {type: Number},
        attempted: {type: Number},
        correct: {type: Number},
        interviewDetail: {
            interviewerName: {type: String},
            interviewType: {type: String}
        },
        subject: {},
        level: {}
    }),
    employeesSchemaModel = mongoose.model('employees', employeesSchema),
    performanceSchemaModel = mongoose.model('performance-review', performanceSchema),
    reviewerSchemaModel = mongoose.model('reviewer', reviewerSchema);
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