var redux = require('redux');

console.log('Startig mytask redux example');

var stateDefault = {
    searchText:'',
    showCompleted: false,
    taskText: []
};

var reducer = (state = stateDefault, action) => {

  return state;
  
}


var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);
