class NotUniqAcessorie extends Error {
	constructor() {
		super();
		this.statusCode = 400;
		this.description = 'Bad Request';
		this.message = 'Year must be between 1995 and 2022';
	}
}
module.exports = NotUniqAcessorie;