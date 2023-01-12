var express = require('express');
var router = express.Router();
const investmentsCtrl = require('../controllers/investments')


/* GET users listing. */
router.get('/', investmentsCtrl.index)
router.get('/:id', investmentsCtrl.show)

module.exports = router;
