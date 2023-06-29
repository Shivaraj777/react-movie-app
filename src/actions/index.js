//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FAVOURITES';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';

//action creators(returns an action)
export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies
  }
}

//add favourites action creator
export const addToFavourites = (movie) => {
  return {
    type: ADD_TO_FAVOURITES,
    movie
  }
}

//remove favouites action creator
export const removeFromFavourites = (movie) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie
  }
}

//show favouities tab action creator
export const showFavourites = (value) => {
  return {
    type: SHOW_FAVOURITES,
    value
  }
}

// get the movie from API and dispatch action to display it
export const handleMovieSearch = (movie) => {
  const url = `http://www.omdbapi.com/?t=${movie}&apikey=ab956ffa`;
  return function (dispatch){
    fetch(url)
    .then((response) => response.json())
    .then((movie) => {
      console.log(movie);

      //dispatch an action
      dispatch(addMovieSearchResults(movie));
    });
  }
}

// action creator to add search results to state
export function addMovieSearchResults(movie){
  return {
    type: ADD_SEARCH_RESULT,
    movie
  }
}

//get movie from API and add it to movies list after click
export const handleAddMovieToList = (id) => {
  // console.log(id);
  const url = `https://www.omdbapi.com/?apikey=205c172a&i=${id}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);

        //dispatch an action to store the movie to the store
        dispatch(addMovieToList(movie));
      });
  };
}

//action creator to add searched movie to movies list
export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

// {
//     type: 'INCREASE_COUNT'
// }
// {
//     type: 'DECREASE_COUNT'
// }