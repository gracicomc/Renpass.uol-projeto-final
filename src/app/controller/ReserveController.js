const ReserveService = require('../service/ReserveService');

class ReserveController {
  async create(req, res) {
    try {
      const result = await ReserveService.create(req.body);
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
      const result = await ReserveService.list(req.query);
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
      const result = await ReserveService.getById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message,
      });
    }
  }

  async patchReserve(req, res) {
    try {
      const result = await ReserveService.patchReserve(req.params.id, req.body);
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

module.exports = new ReserveController();
