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


var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Eat'

};

store.dispatch(action);

console.log('searchText', store.getState());
