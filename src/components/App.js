import React from 'react';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import {data} from '../data';
import { addMovies, showFavourites } from '../actions';

class App extends React.Component{

  //fetch the data when component is mounted/created
  componentDidMount() {
    const {store} = this.props;

    //listen to changes in store state
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();  //not recommended to use(forcefully re-render the app component)
    });

    //make api call
    //dispatch action(by calling action creator)
    store.dispatch(addMovies(data));
  }

  //change the tab
  changeTab = (value) => {
    console.log('Changing....');
    this.props.store.dispatch(showFavourites(value));
  }

  //check if movie is favourite
  favouriteMovieCheck = (movie) => {
    const {movies} = this.props.store.getState();
    const {favourites} = movies;

    //find the index of movie
    const index = favourites.indexOf(movie);

    return (index === -1) ? false : true;
  }

  render() {
    const {store} = this.props;
    const {movies, search} = store.getState();
    const {list, favourites, showFavouritesTab} = movies;
    const moviesList = showFavouritesTab ? favourites : list;
    // console.log(store.getState());

    return (
      <div className="App">
        <Navbar search={search} dispatch={store.dispatch} />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavouritesTab ? '' : 'active-tabs'}`} onClick={() => this.changeTab(false)}>Movies</div>
            <div className={`tab ${showFavouritesTab ? 'active-tabs' : ''}`} onClick={() => this.changeTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {moviesList.map((movie, index) => 
              <MovieCard movie={movie} key={`movie-${index}`} dispatch={store.dispatch} isFavourite={this.favouriteMovieCheck(movie)} />
            )}
          </div>
          {moviesList.length === 0 ? <div className='no-movies'>No Movies to display!</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
