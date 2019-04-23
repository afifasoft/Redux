var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();


  console.log('Name is', state.name);
  //document.getElementById('app').innerHTML = state.name;

  console.log('New State:', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View Your Location</a>'
  }
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Atif'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));
//unsubscribe();

store.dispatch(actions.changeName('Salman'));

store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.addMovie('Star wars', 'Action'));

store.dispatch(actions.removeMovie(1));
