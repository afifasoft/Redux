var redux = require('redux');

console.log('Startig mytask redux example');

var stateDefault = {
    searchText:'',
    showCompleted: false,
    taskText: []
};

var reducer = (state = stateDefault, action) => {

  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT' :
      return {
          ...state,
          searchText: action.searchText

      }

    default:
      return state;
  }
}


var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
});


var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Eat'

});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'

});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'something else'

});
console.log('searchText', store.getState());
