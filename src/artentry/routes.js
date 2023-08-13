const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get("/:id", (req, res, next) => {
  const id = req.params.id;

  if (!id || isNaN(id) || Number(id) <= 0) {
    return res.status(400).json({ error: 'Invalid endpoint format' });
  }

  // Proceed to the next middleware if validation passes
  next();
}, controller.getArtentryById);

// Handle the case when /api/artentry/ is accessed without an ID
router.get("/", (req, res) => {
  return res.status(400).json({ error: 'Missing ID parameter' });
});

module.exports = router;