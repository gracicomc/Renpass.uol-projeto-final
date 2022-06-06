class IdNotFound extends Error {
	constructor() {
		super();
		this.statusCode = 404;
		this.description = 'Not found';
		this.message = 'Id not found';
	}
}
module.exports = IdNotFound;