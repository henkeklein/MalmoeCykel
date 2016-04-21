var _ = require('lodash');
var async = require('async');

/**
 * Split into declaration and initialization for better startup performance.
 */
var validator;
var graph;
var ig;
var Y;
var request;

function loadScript(url)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    //script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}


/**
 * GET /api
 * List of API examples.
 */
exports.getApi = function(req, res) {
  res.render('api/index', {
    title: 'API Examples'
  });
};


exports.getMap = function(req, res) {
  res.render('maps/google', {
    title: 'Maps Examples'
  });
};

/**
 * GET /api/facebook
 * Facebook API example.
 */
exports.getFacebook = function(req, res, next) {
    res.render('api/facebook', {
      title: 'Facebook API'
    });
};
