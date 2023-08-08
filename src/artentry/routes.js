const { Router } = require('express');
const contoller = require('./controller');

const router = Router();

router.get("/", contoller.getArtentries);
router.get("/:id", contoller.getArtentryById);

module.exports = router;