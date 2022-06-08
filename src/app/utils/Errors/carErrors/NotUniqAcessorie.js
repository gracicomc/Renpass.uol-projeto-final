class NotUniqAcessorie extends Error {
	constructor() {
		super();
		this.statusCode = 400;
		this.description = 'Bad Request';
		this.message = 'Acessories contains a duplicate value';
	}
}
module.exports = NotUniqAcessorie;