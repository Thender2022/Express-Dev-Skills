var express = require('express');
var router = express.Router();
const investmentsCtrl = require('../controllers/investments')


/* GET users listing. */
router.get('/', investmentsCtrl.index)
router.get('/new', investmentsCtrl.new)
router.get('/:id', investmentsCtrl.show)
router.post('/', investmentsCtrl.create)
router.delete('/:id', investmentsCtrl.delete)


module.exports = router;
