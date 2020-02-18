const express = require("express");
const { check, validationResult } = require('express-validator');
const router = express.Router();

const User = require('../models/User');

// @route       POST /api/users
// @desc        Register users
// @access      public
router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'please enter valid email').isEmail(),
  check('password', 'please enter password with atleast 6 character').isLength({ min: 6 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  res.send(req.body);
})


module.exports = router;