var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'George',
  location: 'El Salvador'
};

var objTwo = {
  age: 25,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(<h1>React Boilerplate App!</h1>,
  document.getElementById('app'));
