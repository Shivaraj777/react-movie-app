import React, { Component } from 'react';
import {handleMovieSearch} from '../actions';

export class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSearchResults: true,
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
    return (
      <div className='nav'>
        <div className='search-container'>
          <input value={this.searchText} onChange={this.handleChange} />
          <button id='search-btn' onClick={this.handleSearch}>Search</button>
        </div>
      </div>  
    )
  }
}

export default Navbar;