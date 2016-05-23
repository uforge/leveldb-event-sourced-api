require('babel-register');

var server = require('./src/server').default;

server.start(function() {
  console.log('Running on 3000');
});
