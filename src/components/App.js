import React from 'react';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import {data} from '../data';
import { addMovies, showFavourites } from '../actions';
import { connect } from '..';
// import { StoreContext } from '..';

class App extends React.Component{

  //fetch the data when component is mounted/created
  componentDidMount() {
    //make api call
    //dispatch action(by calling action creator)
    this.props.dispatch(addMovies(data));
  }

  //change the tab
  changeTab = (value) => {
    console.log('Changing....');
    this.props.dispatch(showFavourites(value));
  }

  //check if movie is favourite
  favouriteMovieCheck = (movie) => {
    const {movies} = this.props;
    const {favourites} = movies;

    //find the index of movie
    const index = favourites.indexOf(movie);

    return (index === -1) ? false : true;
  }

  render() {
    const {movies, search} = this.props;
    const {list, favourites, showFavouritesTab} = movies;
    const moviesList = showFavouritesTab ? favourites : list;
    // console.log(store.getState());

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavouritesTab ? '' : 'active-tabs'}`} onClick={() => this.changeTab(false)}>Movies</div>
            <div className={`tab ${showFavouritesTab ? 'active-tabs' : ''}`} onClick={() => this.changeTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {moviesList.map((movie, index) => 
              <MovieCard movie={movie} key={`movie-${index}`} dispatch={this.props.dispatch} isFavourite={this.favouriteMovieCheck(movie)} />
            )}
          </div>
          {moviesList.length === 0 ? <div className='no-movies'>No Movies to display!</div> : null}
        </div>
      </div>
    );
  }
}

/*
  class for StoreContext Consumer
  used to access the store by wrapping the component and
  passing store through function
*/
// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <App store={store}></App>
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

//callback function to get particular state from store
function mapStateToProps(state){
  return{
    movies: state.movies,
    search: state.search
  }
}

//connect App component to redux store
const ConnectedAppComponent = connect(mapStateToProps)(App);

export default ConnectedAppComponent;
