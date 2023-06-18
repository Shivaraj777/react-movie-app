import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES } from "../actions";

//set the initial state in store
const initialState = {
  list: [],
  favourites: []
};

//a reducer function
export default function movies(state = initialState, action){
  //if action is found, return updated state
  switch(action.type){
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies
      }

    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites]
      }

    case REMOVE_FAVOURITES:
      const {favourites} = state;
      //remove the movie from favourites
      const updatedFavourites = favourites.filter((favourite) => favourite.Title !== action.movie.Title);
      return {
        ...state,
        favourites: updatedFavourites
      }
      
    default:
      return state;
  }
}