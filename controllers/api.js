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

exports.getMongo = function(req, res){
  res.render('dbviews/mongodb', {
    title: 'Create new event'
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
