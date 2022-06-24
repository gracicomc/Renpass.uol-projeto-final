const ReserveService = require('../service/ReserveService');

class ReserveController {
  async create(req, res) {
    try {
      const { rentalId } = req.params;
      const result = await ReserveService.create(rentalId, req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.statusCode || 400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message
      });
    }
  }

  async list(req, res) {
    try {
      const result = await ReserveService.list(req.query);
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
      const result = await ReserveService.getById(req.params.id);
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
      const { rentalId, id } = req.params;
      const result = await ReserveService.updateById(rentalId, id, req.body);
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
      const result = await ReserveService.deleteById(req.params.id);
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

module.exports = new ReserveController();
