const express = require("express");

const router = express.Router();

// @route       POST /api/users
// @desc        Register users
// @access      public
router.post('/', (req, res) => {
  res.send('sdakjf');
})


module.exports = router;