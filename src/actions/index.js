//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FAVOURITES';

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

// {
//     type: 'INCREASE_COUNT'
// }
// {
//     type: 'DECREASE_COUNT'
// }