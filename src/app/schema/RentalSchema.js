const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const RentalSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	cnpj: {
		type: String,
		unique: true,
		required: true
	},
	activities: {
		type: String,
		required: true
	},
	address: [
		{
			zipCode: {
				type: String,
				required: true,	
			},
			number: {
				type: Number,
				required: true
			},
			complement: {
				type: String,
			},
			isFilial: {
				type: String,
				required: true,
				enum: [true, false]
			}
		}
	],
},
{
	versionKey: false
}
);

RentalSchema.plugin(mongoosePaginate);

const Rental = mongoose.model('Rental', RentalSchema);
module.exports = Rental;