const express = require('express');

class App { 
	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();

	}
	middlewares() {
		this.server.use(express.json());

	}
	router() {
		this.router(this.server);
        
	}
}
module.exports = new App().server;