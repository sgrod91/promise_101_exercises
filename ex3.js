// var request = require('request');
// var fs = require('fs');
//
// var url = 'https://en.wikipedia.org/wiki/Futures_and_promises';
// var filename = 'output.html';
//
// request.get(url, function(err, response, html) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   fs.writeFile(filename, html, function(err) {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     console.log('It worked');
//   });
// });

var fs = require('fs-promise');
var request = require('request-promise');

var url = 'https://en.wikipedia.org/wiki/Futures_and_promises';
var filename = 'output.html';

request.get(url)
  .then(function(html) {
    //ALWAYS REMEMBER TO RETURN
    return fs.writeFile(filename, html);
  })
  .then(function() {
    console.log('It worked');
  })
  .catch(function(err) {
    console.log(err.message);
  });
