import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';

//create the store
const store = createStore(movies); //createStore takes reducer as argument
console.log(store);
console.log('Before STATE', store.getState()); //to fetch the state details

store.dispatch({
  type: 'ADD_MOVIES',
  movies: [{name: 'Superman'}]
});

console.log('After STATE', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

