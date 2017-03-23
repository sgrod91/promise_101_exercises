var request = require('request-promise');

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];
// the tedious way
// var arrayOfPromises = [
//   request.get(urls[0]),
//   request.get(urls[1]),
//   request.get(urls[2]),
//   request.get(urls[3]),
//   request.get(urls[4]),
// ];
var arrayOfPromises = urls.map(function(url) {
  return request.get(url);
});

var aPromiseToResolveAllThosePromises = Promise.all(arrayOfPromises);

aPromiseToResolveAllThosePromises
  .then(function(arrayOfTheHtmls) {
    console.log(arrayOfTheHtmls);
  })
  .catch(function(err) {
    console.log(err.message);
  });
