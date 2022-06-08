class NotUniqueEmail extends Error {
	constructor(email) {
		super(email);
		this.statusCode = 400;
		this.description = 'Bad Request';
		this.message = ' This Email already in use';
	}
}
module.exports = NotUniqueEmail;