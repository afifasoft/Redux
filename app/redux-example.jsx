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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name
});

var currentState = store.getState();

console.log('currentState', currentState);


var action = {
  type: 'CHANGE_NAME',
  name: 'Atif'
};

store.dispatch(action);
//unsubscribe();
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Kandora'
})
