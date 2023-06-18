import React, { Component } from 'react';
import { addToFavourites, removeFromFavourites } from '../actions';

export class MovieCard extends Component {

  //add movies to favourites
  handleFavouriteClick = () => {
    const {movie} = this.props;
    this.props.dispatch(addToFavourites(movie));
  }

  //remove movies from favourites
  handleUnfavouriteClick = () => {
    const {movie} = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  }

  render() {
    const {movie, isFavourite} = this.props;

    return (
      <div className='movie-card'>
        <div className='left'>
            <img src={movie.Poster} alt='movie-poster'/>
        </div>
        <div className='right'>
            <div className='title'>{movie.Title}</div>
            <div className='plot'>{movie.Plot}</div>
            <div className='footer'>
                <div className='rating'>{movie.imdbRating}</div>
                {isFavourite ? 
                  <button className='unfavourite-btn' onClick={this.handleUnfavouriteClick}>UnFavourite</button> : 
                  <button className='favourite-btn' onClick={this.handleFavouriteClick}>Favourite</button>
                }
            </div>
        </div>
      </div>
    )
  }
}

export default MovieCard;