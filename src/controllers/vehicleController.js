
const service = require('../services/vehicleService');

module.exports = {
  async getAll(req, res) {
    const data = await service.getAll();
    res.json(data);
  },

  async getById(req, res) {
    const item = await service.getById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Veículo não encontrado' });
    res.json(item);
  },

  async create(req, res) {
    try {
      const item = await service.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ error: 'Erro de validação', details: err.errors });
      }
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async update(req, res) {
    try {
      const item = await service.update(req.params.id, req.body);
      if (!item) return res.status(404).json({ message: 'Veículo não encontrado' });
      res.json(item);
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ error: 'Erro de validação', details: err.errors });
      }
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async remove(req, res) {
    const success = await service.remove(req.params.id);
    if (!success) return res.status(404).json({ message: 'Veículo não encontrado' });
    res.status(204).send();
  },
};
