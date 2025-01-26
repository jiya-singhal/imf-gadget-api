const { Op } = require('sequelize');
const { Gadget } = require('../models');
const gadget = require('../models/gadget');

// Retrieve all gadgets
exports.getAllGadgets = async (req, res) => {
  const gadgets = await Gadget.findAll();
  const gadgetsWithProbability = gadgets.map(gadget => ({
    ...gadget.toJSON(),
    missionSuccessProbability: `${Math.floor(Math.random() * 100) + 1}%`
  }));
  res.json(gadgetsWithProbability);
};

// Add a new gadget
exports.addGadget = async (req, res) => {
  const { name, status } = req.body;
  const gadget = await Gadget.create({ name, status });
  res.json(gadget);
};

// Update a gadget
exports.updateGadget = async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  await Gadget.update({ name, status }, { where: { id } });
  res.json({ message: 'Gadget updated successfully' });
};

// Decommission a gadget
exports.decommissionGadget = async (req, res) => {
  const { id } = req.params;
  const timestamp = new Date();
  await Gadget.update(
    { status: 'Decommissioned', decommissionedAt: timestamp },
    { where: { id } }
  );
  res.json({ message: 'Gadget decommissioned successfully', timestamp });
};

// Self-destruct a gadget
exports.selfDestructGadget = async (req, res) => {
  const { id } = req.params;
  const confirmationCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  await Gadget.update({ status: 'Destroyed' }, { where: { id } });
  res.json({ message: `Gadget self-destructed successfully`, confirmationCode });
};
