//action types
export const ADD_MOVIES = 'ADD_MOVIES';

//action creators(returns an action)
export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies
  }
}

// {
//     type: 'INCREASE_COUNT'
// }
// {
//     type: 'DECREASE_COUNT'
// }