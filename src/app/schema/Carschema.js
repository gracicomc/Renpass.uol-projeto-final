const mongoose = require('mongoose');
// const _ = require('underscore');

const CarSchema = new mongoose.Schema({

	model: {
		type: String,
		required: true
	},

	type: {
		type: String,
		required: true
	},

	brand: {
		type: String,
		required: true
	},

	color: {
		type: String,
		required: true
	},

	year: {
		type: String,
		required: true,
	},

	accessories: [
		{
			description: {
				type: String,
				required: true,
				_id: false,
			}
		}
	],

	passengersQtd: {
		type: Number,
		required: true
	}
	
},
{versionKey: false}
);

// CarSchema.pre('save', function (next) {
// 	this.acessories = _.uniq(this.acessories);
// 	next();
// });

const Car = mongoose.model('Car', CarSchema);
module.exports = Car; 