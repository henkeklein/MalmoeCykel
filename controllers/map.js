/**
 * GET /
 * Home page.
 */

exports.getMap = function(req, res) {
  res.render('maps/maps', {
    title: 'map'
  });
};