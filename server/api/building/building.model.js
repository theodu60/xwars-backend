'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BuildingSchema = new Schema({
  name: String,
  info: String,
  legend: String,
  base: {
	  metal: Number,
	  cristal: Number,
	  frubin: Number,
	  orizin: Number,
	  frurozin: Number,
	  gold: Number	  
  },
  coeff: {
	  metal: Number,
	  cristal: Number,
	  frubin: Number,
	  orizin: Number,
	  frurozin: Number,
	  gold: Number,
	  point: Number		  
  },
  energy: Number,
  active: Boolean
});

module.exports = mongoose.model('Building', BuildingSchema);