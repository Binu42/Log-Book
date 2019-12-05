const express = require("express");

const router = express.Router();

// @route       POST /api/auth
// @desc        get all loggedIn users
// @access      private
router.post('/', (req, res) => {
  res.send('sdakjf');
})


// @route       POST /api/auth
// @desc        auth user and get Token
// @access      public
router.post('/', (req, res) => {
  res.send('sdakjf');
})

module.exports = router;