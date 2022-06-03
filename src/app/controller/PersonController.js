const PersonService = require('../service/PersonService');

class PersonController {

	async create(req, res) {
		try {
			const result = await PersonService.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async list(req, res) {
		try {
			const result = await PersonService.list(req.query);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json({description: error.description, name: error.message});
		}
	}

	async getById(req, res) {
		try {
			const result = await PersonService.getById(req.params.id);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json({description: error.description, name: error.message});
		}
	}

	async updatePerson(req, res) {
		try {
			const result = await PersonService.updatePerson(req.params.id, req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json({description: error.description, name: error.message});
		}
	}

	async deletePerson(req, res) {
		try {
			const result = await PersonService.deletePerson(req.params.id);
			return res.status(204).json(result);
		} catch (error) {
			return res.status(400).json({description: error.description, name: error.message});
		}
	}
}

module.exports = new PersonController ();