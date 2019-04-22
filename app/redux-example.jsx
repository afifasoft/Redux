var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};






var oldReducer = (state = stateDefault, action) => {
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

// Name reducer and action generators
// --------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;

    default:
      return state;

  }
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name  // name: name ES6
  }
};

// Hobbies reducer and action generators
// --------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];

    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id)

    default:
      return state;
  }
};

var addHobby = (hobby) => {
    return {
      type: 'ADD_HOBBY',
      hobby
    }
};

var removeHobby = (id) => {
    return {
      type: 'REMOVE_HOBBY',
      id
    }
};

// Movies reducer and action generators
// --------------------
var nextMoiveId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMoiveId++,
          title: action.title,
          genre: action.genre,
        }
      ];

    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id)

    default:
      return state;
  }
};

var addMovie = (title, genre) => {
    return {
      type: 'ADD_MOVIE',
      title,
      genre
    }
};

var removeMovie = (id) => {
    return {
      type: 'REMOVE_MOVIE',
      id
    }
};

var reducer = redux.combineReducers({
    name : nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
})

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

store.dispatch(changeName('Atif'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

store.dispatch(removeHobby(2));
//unsubscribe();

store.dispatch(changeName('Salman'));

store.dispatch(addMovie('Mad Max', 'Action'));
store.dispatch(addMovie('Star wars', 'Action'));

store.dispatch(removeMovie(1));
