var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
//  state = state || {name : 'Anonymous'};


  switch(action.type) {
    case 'CHANGE_NAME' :
      return {
        ...state,
        name: action.name
      };

    default:
      return state;
  }

};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);


var action = {
  type: 'CHANGE_NAME',
  name: 'Atif'
};

store.dispatch(action);

console.log('name: ', store.getState());
