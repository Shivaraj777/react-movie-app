import React, { Component } from 'react';
import {handleAddMovieToList, handleMovieSearch} from '../actions';
import { connect } from '..';

export class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };
  }

  // add searched movie to movies list
  handleAddToMovies = (movie) => {
    this.props.dispatch(handleAddMovieToList(movie.imdbID));
    this.setState({
      showSearchResults: false,
    });
  };

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
                  <button onClick={() => this.handleAddToMovies(result)}>
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

// class NavbarWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

//callback function to get particular state from store
function mapStateToProps(state){
  return{
    search: state.search
  }
}

//connect Navbar component to redux store
const connectedNavbarComponent = connect(mapStateToProps)(Navbar);

export default connectedNavbarComponent;