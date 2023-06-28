import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_SEARCH_RESULT, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SHOW_FAVOURITES } from "../actions";

//set the initial state for movies
const initialMoviesState = {
  list: [],
  favourites: [],
  showFavouritesTab: false
};

//a reducer function
export function movies(state = initialMoviesState, action){
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

//set initial state for search results
const initialSearchState = {
  result: {},
  showSearchResults: false,
};

//search reducer function
export function search(state = initialSearchState, action) {
  switch(action.type){
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true
      }
    default:
      return state;
  }
}

//set initial state for store(root reducer)
// const initialRootState = {
//   movies: initialMoviesState,
//   search: initialSearchState
// };

//root reducer function
// export default function rootReducer(state = initialRootState, action){
//   //return root state object
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action)
//   }
// }

//combining reducers using combineReducers function
export default combineReducers({
  movies: movies,  //pass the reference of the reducers
  search: search
});