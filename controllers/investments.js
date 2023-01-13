const Investment = require('../models/investment')

module.exports = {
    index,
    show
}


function index(req, res) {
    res.render('investments/index', {
        investments: Investment.getAll(),
        title: 'All Investments'
    })
}
function show(req, res) {
    res.render('investments/show', {
        investment: Investment.getOne(req.params.id),
        title: 'Investment Details'
    })
}

 