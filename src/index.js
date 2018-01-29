// Code goes here
// const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
// const title1 = 'Mad Max: Fury Road'
// const madMaxPoster = "http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
//
// ReactDOM.render(
//   <MovieCard
//     title=title1,
//     poster=madMaxPoster,
//     genres={madMaxGenres}
//   />,
//   document.getElementById('root')
// );

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
