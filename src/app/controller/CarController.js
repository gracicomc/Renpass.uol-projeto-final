const CarService = require('../service/CarService');

class CarController {
  async create(req, res) {
    try {
      const result = await CarService.create(req.body);
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
      const result = await CarService.list(req.query);

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
      const result = await CarService.getById(req.params.id);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message,
      });
    }
  }

  async updateById(req, res) {
    try {
      const result = await CarService.updateById(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message,
      });
    }
  }

  async patchAccessories(req, res) {
    try {
      const result = await CarService.patchAccessories(
        req.params.id,
        req.params.accessoriesId,
        req.body
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message,
      });
    }
  }

  async deleteById(req, res) {
    try {
      const result = await CarService.deleteById(req.params.id);
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

module.exports = new CarController();
