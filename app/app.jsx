var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // var Route = require('react-router').Route;



// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')


  ReactDOM.render(
    <p>React Boiler Plate 3</p>,
    document.getElementById('app')
  );
