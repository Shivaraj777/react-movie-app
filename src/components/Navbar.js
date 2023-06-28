import React, { Component } from 'react';
import {handleMovieSearch} from '../actions';

export class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };
  }

  // handleAddToMovies = (movie) => {
  //   this.props.dispatch(handleAddMovieToList(movie.imdbID));
  //   this.setState({
  //     showSearchResults: false,
  //   });
  // };

  // search the movie
  handleSearch = () => {
    const {searchText} = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  }

  // update the searchText state 
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
    const {result, showSearchResults} = this.props.search;

    return (
      <div className='nav'>
        <div className='search-container'>
          <input value={this.searchText} onChange={this.handleChange} />
          <button id='search-btn' onClick={this.handleSearch}>Search</button>

          {showSearchResults && 
            <div className='search-results'>
              <div className='search-result'>
                <img src={result.Poster} alt='search-pic' />
                <div className='movie-info'>
                  <span>{result.Title}</span>
                  <button>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          }

        </div>
      </div>  
    )
  }
}

export default Navbar;