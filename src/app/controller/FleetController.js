const FleetService = require('../service/FleetService');

class FleetController {
  async create(req, res) {
    try {
      const { rentalId } = req.params;
      const result = await FleetService.create(rentalId, req.body);
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

  async patchFleet(req, res) {
    try {
      const result = await FleetService.patchFleet(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message,
      });
    }
  }

  async deleteFleet(req, res) {
    try {
      const result = await FleetService.deleteFleet(req.params.id);
      return res.status(204).json(result);
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
