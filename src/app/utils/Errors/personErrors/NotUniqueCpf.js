class NotUniqueCpf extends Error {
	constructor() {
		super();
		this.statusCode = 400;
		this.description = 'Bad Request';
		this.message = 'This CPF already exists';
	}
}
module.exports = NotUniqueCpf;