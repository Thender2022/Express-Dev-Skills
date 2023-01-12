const investments = [
    {id: 125223, investment: 'In Self', done: true},
    {id: 127904, investment: 'Learn Fullstack Basics', done: false},
    {id: 139608, investment: 'Relationships', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return investments;
  }
  function getOne(id) {
    id = parseInt(id);
    return investments.find(investment => investment.id === id);
  }