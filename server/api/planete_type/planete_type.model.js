'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlaneteTypeSchema = new Schema({
  name: String,
  info: String,
  legend: String,
  bonus: {
	  metal: Number,
	  cristal: Number,
	  frubin: Number,
	  orizin: Number,
	  frurozin: Number,
	  gold: Number	  
  },
  active: Boolean
});

module.exports = mongoose.model('PlaneteType', PlaneteTypeSchema);