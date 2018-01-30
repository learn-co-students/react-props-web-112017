// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';


const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img
          src={this.props.poster}
          alt={this.props.title}
        />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(', ')}</small>
      </div>
    );
  }
}

ReactDOM.render(
  (
    <div>
    <MovieCard
    title="Mad Max: Fury Road"
    poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
    genres={madMaxGenres}
  />,
  <MovieCard
  title="Jurassic World"
  poster="http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
  genres={jurassicWorldGenres}
/>
   </div>
  ),
  document.getElementById('root')
);
