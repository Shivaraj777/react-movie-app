//a reducer function
export default function movies(state = [], action){
    //if action is found, return updated state
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}