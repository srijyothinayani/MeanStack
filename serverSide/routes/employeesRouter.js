var express = require('express'),
    ChallengeController=require('../controllers/EmployeesController.js'),
    router = express.Router(),
    cc = new ChallengeController();

employeesRouter.get('/',cc.getAll.bind(cc));
employeesRouter.get('/:id', cc.getById.bind(cc));
employeesRouter.post('/', cc.create.bind(cc));
employeesRouter.put('/:id', cc.update.bind(cc));
employeesRouter.delete('/:id', cc.remove.bind(cc));

module.exports = employeesRouter;