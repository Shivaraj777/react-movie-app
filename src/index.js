import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//create the store
const store = createStore(rootReducer); //createStore takes reducer as argument
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

