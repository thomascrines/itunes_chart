var React = require('react');

var MovieDetail = function(props){
  return (
    <div className='movie-detail'>
    <h3>{props.title}</h3>
    <p>{props.summary}</p>
    </div>
    );
};

module.exports = MovieDetail;