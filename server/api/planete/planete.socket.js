/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Planete = require('./planete.model');

exports.register = function(socket) {
  Planete.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Planete.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('planete:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('planete:remove', doc);
}