class InvalidAge extends Error {
	constructor(age) {
		super(age);
		this.statusCode = 400;
		this.description = 'ivalid age';
		this.message = 'age is under 18';
	}
}
module.exports = InvalidAge;