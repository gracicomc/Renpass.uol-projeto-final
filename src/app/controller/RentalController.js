const RentalService = require('../service/RentalService');

class RentalController {
  async create(req, res) {
    try {
      const result = await RentalService.create(req.body);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message
      });
    }
  }

  async list(req, res) {
    try {
      const result = await RentalService.list(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message
      });
    }
  }

  async getById(req, res) {
    try {
      const result = await RentalService.getById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message
      });
    }
  }

  async updateById(req, res) {
    try {
      const result = await RentalService.updateById(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message
      });
    }
  }

  async deleteById(req, res) {
    try {
      const result = await RentalService.deleteById(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message
      });
    }
  }
}

module.exports = new RentalController();
