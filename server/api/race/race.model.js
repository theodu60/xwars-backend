'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RaceSchema = new Schema({
  name: String,
  info: String,
  effects: {
	  attack: {
		  projectile: Number,
		  rocket: Number,
		  plasma: Number,
		  ray: Number,
		  explosive: Number,
		  biological: Number,
		  antimatter: Number
	  },
	  defense: {
		  armouring: Number,
		  shield: Number,
		  carbon: Number,
		  teleportation: Number
	  },
	  general: {
		  ship_cost: Number,
		  ship_time_construct: Number,
		  defense_cost: Number,
		  defense_time_construct: Number,
		  production: Number,
		  trade: Number,
		  finance: Number,
		  transport: Number
	  },	 
	  espionage: {
		  espionage: Number,
		  anti_espionage: Number,
		  sabotage: Number,
		  anti_sabotage: Number
	  }	 
  }
});

module.exports = mongoose.model('Race', RaceSchema);