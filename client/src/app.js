var React = require('react');
var ReactDOM = require('react-dom');
var MoviesContainer = require('./containers/MoviesContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <MoviesContainer />,
    document.getElementById('app')
  );
};
