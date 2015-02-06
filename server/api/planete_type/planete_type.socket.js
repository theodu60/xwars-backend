/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var PlaneteType = require('./planete_type.model');

exports.register = function(socket) {
  PlaneteType.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  PlaneteType.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('planete_type:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('planete_type:remove', doc);
}