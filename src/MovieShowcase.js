import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
// item.title, item.IMDBRating, item.genres, item.poster <MovieData content={item}  
//<li>Title: {item.title}, IMDBRating: {item.IMDBRating}, Genres: {item.genres}, Poster: {item.poster}</li>
export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    
  return movieData.map(movie => <MovieCard  title = {movie.title} IMDBRating = {movie.IMDBRating} genres={movie.genres} poster={movie.poster}/> ) 
  
  //map over your movieData array and return an array of the correct JSx
  }

  render() {
    return (
      <div id="movie-showcase">
        
        {this.generateMovieCards()}

        
      </div>
    )
  }
}



// title ={this.props.title} postersrc={this.props.IMDBRating} Genres={this.props.genres} Poster={this.props.poster}