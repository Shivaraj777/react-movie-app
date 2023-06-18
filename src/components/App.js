import React from 'react';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import {data} from '../data';
import { addMovies } from '../actions';

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

    console.log(store.getState());
  }


  render() {
    const movies = this.props.store.getState();
    console.log('RENDER');

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie) => 
              <MovieCard movie={movie} key={movies.indexOf(movie)} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
