var express = require('express'),
    ChallengeController=require('../controllers/ChallengeController.js'),
    router = express.Router(),
    cc = new ChallengeController();

router.get('/',cc.getAll.bind(cc));
router.get('/:id', cc.getById.bind(cc));
router.post('/', cc.create.bind(cc));
router.put('/:id', cc.update.bind(cc));
router.delete('/:id', cc.remove.bind(cc));

module.exports = router;