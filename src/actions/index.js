//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';

//action creators(returns an action)
export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies
  }
}

//add favourites action creator
export const addFavourites = (movie) => {
  return {
    type: ADD_FAVOURITES,
    movie
  }
}

//remove favouites action creator
export const removeFavourites = (movie) => {
  return {
    type: REMOVE_FAVOURITES,
    movie
  }
}

// {
//     type: 'INCREASE_COUNT'
// }
// {
//     type: 'DECREASE_COUNT'
// }