const investments = [
    {id: 125223, investment: 'In Self', done: true},
    {id: 127904, investment: 'Learn Fullstack Basics', done: false},
    {id: 139608, investment: 'Relationships', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
    
  };

  function getAll() {
    return investments;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return investments.find(investment => investment.id === id);
  }
  
  function create(investment) {
    investment.id = Date.now() % 1000000,
    investment.done = false,
    investments.push(investment)
  }

  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = investments.findIndex(investment => investment.id === id);
    investments.splice(idx, 1);
  }
 