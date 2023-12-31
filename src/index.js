import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import { createContext } from 'react';

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

// Thunk middleware to handle actions dispatch
// const thunk = ({dispatch, setState}) => (next) => (action) => {
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

//create the store
const store = createStore(rootReducer, applyMiddleware(logger, thunk)); //createStore takes reducer as argument
// console.log(store);
// console.log('Before STATE', store.getState()); //to fetch the state details

//Creating a context for store
// export const StoreContext = createContext();
// console.log(StoreContext);

/* 
  class for StoreContext Provider 
  provides access to the store to the component and it's children
  which it is wrapped around
*/
// class Provider extends React.Component{
//   render(){
//     const {store} = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

/* 
  connect() method to connect a Component to redux store
*/
// export function connect(callback){
//   return function (Component){
//     class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//         this.unsunscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }

//       // after component gets destroyed
//       componentWillUnmount(){
//         this.unsunscribe();
//       }

//       render(){
//         const {store} = this.props;
//         const state = store.getState();
//         const getDataFromStore = callback(state);

//         return (
//           <Component {...getDataFromStore} dispatch={store.dispatch} />
//         );
//       }
//     }

//     //wrapper for ConnectedComponent to get store data
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return (
//           <StoreContext.Consumer>
//             {(store) => (
//               <ConnectedComponent store={store} />
//             )}
//           </StoreContext.Consumer>
//         );
//       }
//     }

//     return ConnectedComponentWrapper;
//   }
// }

//dispatch the action to be triggerd
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

// console.log('After STATE', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

