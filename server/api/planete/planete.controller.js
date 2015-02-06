'use strict';

var _ = require('lodash');
var Planete = require('./planete.model');

// Get list of planetes
exports.index = function(req, res) {
  Planete.find(function (err, planetes) {
    if(err) { return handleError(res, err); }
    return res.json(200, planetes);
  });
};

// Get a single planete
exports.show = function(req, res) {
  Planete.findById(req.params.id, function (err, planete) {
    if(err) { return handleError(res, err); }
    if(!planete) { return res.send(404); }
    return res.json(planete);
  });
};

// Creates a new planete in the DB.
exports.create = function(req, res) {
  Planete.create(req.body, function(err, planete) {
    if(err) { return handleError(res, err); }
    return res.json(201, planete);
  });
};

// Updates an existing planete in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Planete.findById(req.params.id, function (err, planete) {
    if (err) { return handleError(res, err); }
    if(!planete) { return res.send(404); }
    var updated = _.merge(planete, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, planete);
    });
  });
};

// Deletes a planete from the DB.
exports.destroy = function(req, res) {
  Planete.findById(req.params.id, function (err, planete) {
    if(err) { return handleError(res, err); }
    if(!planete) { return res.send(404); }
    planete.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}