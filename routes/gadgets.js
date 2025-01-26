const express = require('express');
const router = express.Router();
const gadgetsController = require('../controllers/gadgetsController');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

router.use(authenticate);

router.get('/', gadgetsController.getAllGadgets);
router.post('/', gadgetsController.addGadget);
router.patch('/:id', gadgetsController.updateGadget);
router.delete('/:id', authorize('admin'), gadgetsController.decommissionGadget);
router.post('/:id/self-destruct', gadgetsController.selfDestructGadget);
router.get('/', gadgetsController.getGadgets);

module.exports = router;
