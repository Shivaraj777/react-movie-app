import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

/* Logger middleware
   curried form of logger(obj, next, action)
   can be called by using logger(obj)(next)(action) */
// function logger({dispatch, setState}){
//   return function(next){
//     return function(action){
//       console.log('ACTION_TYPE: ', action.type);
//       next(action);
//     }
//   }
// }

// second way to write middleware
const logger = ({dispatch, setState}) => (next) => (action) => {
  if(typeof action !== 'function'){
    console.log('ACTION_TYPE: ', action.type);
  }
  next(action);
}

// const thunk = ({dispatch, setState}) => (next) => (action) => {
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

//create the store
const store = createStore(rootReducer, applyMiddleware(logger, thunk)); //createStore takes reducer as argument
console.log(store);
console.log('Before STATE', store.getState()); //to fetch the state details

//dispatch the action to be triggerd
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

// console.log('After STATE', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

