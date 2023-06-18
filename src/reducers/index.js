import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SHOW_FAVOURITES } from "../actions";

//set the initial state in store
const initialState = {
  list: [],
  favourites: [],
  showFavouritesTab: false
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

    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites]
      }

    case REMOVE_FROM_FAVOURITES:
      const {favourites} = state;
      //remove the movie from favourites
      const updatedFavourites = favourites.filter((favourite) => favourite.Title !== action.movie.Title);
      return {
        ...state,
        favourites: updatedFavourites
      }

    case SHOW_FAVOURITES:
      return {
        ...state,
        showFavouritesTab: action.value
      }

    default:
      return state;
  }
}