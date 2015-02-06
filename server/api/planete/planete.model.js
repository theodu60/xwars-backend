'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlaneteSchema = new Schema({
  name: String,
  info: String,
  legend: String,
  stock: {
	  metal: Number,
	  cristal: Number,
	  frubin: Number,
	  orizin: Number,
	  frurozin: Number,
	  gold: Number	  
  },
  coord: {
	  galaxy: Number,
	  systeme: Number,
	  planete: Number
  },
  is_main_planete: Number,
  active: Boolean
});

module.exports = mongoose.model('Planete', PlaneteSchema);