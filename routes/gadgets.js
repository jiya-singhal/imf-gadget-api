const express = require('express');
const router = express.Router();
const gadgetsController = require('../controllers/gadgetsController');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

// Ensure authenticate middleware is properly defined and applied
router.use(authenticate);

// Define your routes
router.get('/', gadgetsController.getAllGadgets); // Retrieves all gadgets
router.post('/', gadgetsController.addGadget); // Adds a new gadget
router.patch('/:id', gadgetsController.updateGadget); // Updates a gadget
router.delete('/:id', authorize('admin'), gadgetsController.decommissionGadget); // Decommissions a gadget
router.post('/:id/self-destruct', gadgetsController.selfDestructGadget); // Triggers self-destruction

module.exports = router;
