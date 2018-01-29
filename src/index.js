// Code goes here
import React from 'React'
import ReactDOM from 'react-dom'

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img src={this.props.poster} alt={this.props.title} />
        <h2>{this.props.title}</h2>
        <small>{this.props.genres.join(", ")}</small>
      </div>
    )
  }
}

MovieCard.deafultProps = {
  title: "Enter Title Here"
}

ReactDOM.render(
  <MovieCard
    title="My Awesome Movie"
    poster="myawesomeposter.png"
    genres=["I", "should", "have", "made", "a", "variable"]
  />,
  document.querySelector('#global')
)
