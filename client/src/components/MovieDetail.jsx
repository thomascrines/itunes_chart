var React = require('react');

var MovieDetail = function(props){
  return (
    <div className='movie-detail'>
    <h3>{props.title}</h3>
    <a href={props.link}><img src={props.image}/></a>
    <p>{props.summary}</p>
    </div>
    );
};

module.exports = MovieDetail;