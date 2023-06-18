import { ADD_MOVIES } from "../actions";

//set the initial state in store
const initialState = {
  list: [],
  favourites: []
};

//a reducer function
export default function movies(state = initialState, action){
  //if action is found, return updated state
  if(action.type === ADD_MOVIES){
    return {
        ...state,
        list: action.movies
    }
  }
  return state;
}