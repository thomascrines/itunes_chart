var React = require('react');
var MoviesList = require('../components/MoviesList.jsx');
var MovieDetail = require('../components/MovieDetail.jsx');

var MoviesContainer = React.createClass({
  getInitialState: function() {
    return {
      movies: [],
      title: null
    };
  },

  componentDidMount: function() {
    var url = "https://itunes.apple.com/es/rss/topmovies/limit=10/genre=4431/json"
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
          var data = JSON.parse(request.responseText)['feed']['entry'];
          var title = JSON.parse(request.responseText)['feed']['title']['label'];
          this.setState({movies: data, title: title});
        }.bind(this);
    request.send();
  },

  render: function() {
    return (
      <div className = 'container'>
      <h2>{this.state.title}</h2>
      <MoviesList movies={this.state.movies}/>
      </div>
      );
  },

});


module.exports = MoviesContainer;