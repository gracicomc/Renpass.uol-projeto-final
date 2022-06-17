const FleetService = require('../service/FleetService');

class FleetController {
  async create(req, res) {
    try {
      const result = await FleetService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message,
      });
    }
  }

  async list(req, res) {
    try {
      const result = await FleetService.list(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message,
      });
    }
  }

  async getById(req, res) {
    try {
      const result = await FleetService.getById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message,
      });
    }
  }
}

module.exports = new FleetController();
