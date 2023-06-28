//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FAVOURITES';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';

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
      // dispatch({type: ADD_SEARCH_RESULT, movie});
    });
  }

}


// {
//     type: 'INCREASE_COUNT'
// }
// {
//     type: 'DECREASE_COUNT'
// }