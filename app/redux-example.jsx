var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};



var nextHobbyId = 1;
var nextMoiveId = 1;

var reducer = (state = stateDefault, action) => {
//  state = state || {name : 'Anonymous'};


  switch(action.type) {
    case 'CHANGE_NAME' :
      return {
        ...state,
        name: action.name
      };

    case 'ADD_HOBBY' :
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };

    case 'REMOVE_HOBBY' :
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id) // one statement returns
      };

    case 'ADD_MOVIE' :
      return {
          ...state,
          movie: [
            ...state.movies,
            {
              id: nextMoiveId++,
              title: action.title,
              genre: action.genre
            }
          ]
      };
    case 'REMOVE_MOVIE' :
      return {
        ...state,
        movie: state.movies.filter((movie) => movie.id !== action.id)
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
  document.getElementById('app').innerHTML = state.name;

  console.log('New State:', store.getState());
});

var currentState = store.getState();

console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Atif'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});
//unsubscribe();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Salman'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Mad Max',
  genre: 'Action'
});
store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Star wars',
  genre: 'Action'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
