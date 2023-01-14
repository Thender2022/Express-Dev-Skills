const Investment = require('../models/investment')

module.exports = {
    index,
    show,
    new: newInvestment,
    create,
    delete: deleteInvestment
    
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
function newInvestment(req, res) {
    res.render('investments/new', { 
        title: 'New Investment' 
    })
}

function create(req, res) {
    console.log(req.body),
    Investment.create(req.body);
    res.redirect('/investments');
}

function deleteInvestment(req, res) {
    Investment.deleteOne(req.params.id);
    res.redirect('/investments');
}










 
