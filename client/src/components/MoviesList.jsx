var React = require('react');
var MovieDetail = require('./MovieDetail.jsx')

var MoviesList = React.createClass({

  getInitialState: function(){
    return { selectedIndex: undefined };
  },

  render: function (){
    var movies = this.props.movies.map(function(movie, index){
      return (
        <MovieDetail key={index} title={movie["im:name"]["label"]} summary={movie['summary']['label']}/>
      );
    });

    return (
      <div className="movies" >
        {movies}
      </div>
      );
  },

});

module.exports = MoviesList;
