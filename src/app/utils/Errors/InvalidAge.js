class AgeUnderEighteen extends Error {
	constructor() {
		super();
		this.statusCode = 400;
		this.description = 'ivalid age';
		this.message = 'age is under 18';
	}
}
module.exports = AgeUnderEighteen;