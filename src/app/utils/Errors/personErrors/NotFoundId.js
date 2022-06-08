class IdNotFound extends Error {
	constructor(id) {
		super(id);
		this.statusCode = 404;
		this.description = 'Not Found';
		this.message = `ID ${id} not found`;
	}
}
module.exports = IdNotFound;