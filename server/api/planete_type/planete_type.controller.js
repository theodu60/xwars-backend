'use strict';

var _ = require('lodash');
var PlaneteType = require('./planete_type.model');

// Get list of planete_types
exports.index = function(req, res) {
  PlaneteType.find(function (err, planete_types) {
    if(err) { return handleError(res, err); }
    return res.json(200, planete_types);
  });
};

// Get a single planete_type
exports.show = function(req, res) {
  PlaneteType.findById(req.params.id, function (err, planete_type) {
    if(err) { return handleError(res, err); }
    if(!planete_type) { return res.send(404); }
    return res.json(planete_type);
  });
};

// Creates a new planete_type in the DB.
exports.create = function(req, res) {
  PlaneteType.create(req.body, function(err, planete_type) {
    if(err) { return handleError(res, err); }
    return res.json(201, planete_type);
  });
};

// Updates an existing planete_type in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  PlaneteType.findById(req.params.id, function (err, planete_type) {
    if (err) { return handleError(res, err); }
    if(!planete_type) { return res.send(404); }
    var updated = _.merge(planete_type, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, planete_type);
    });
  });
};

// Deletes a planete_type from the DB.
exports.destroy = function(req, res) {
  PlaneteType.findById(req.params.id, function (err, planete_type) {
    if(err) { return handleError(res, err); }
    if(!planete_type) { return res.send(404); }
    planete_type.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}