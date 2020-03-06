const express = require("express");
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const auth = require('../middleware/auth')
const User = require('../models/User');
const router = express.Router();

// @route       POST /api/auth
// @desc        get all loggedIn users
// @access      private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error')
  }
})


// @route       POST /api/auth
// @desc        auth user and get Token
// @access      public
router.post('/', [
  check('email', 'Not valid Email').isEmail(),
  check('password', 'Password is required').exists()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Invalid Credentials')
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid Credentials')
    }
    const payload = {
      user: {
        id: user.id
      }
    }
    jwt.sign(payload, process.env.jwtSecret, {
      expiresIn: 360000
    }, (err, token) => {
      if (err) throw err;
      res.json({ token })
    })
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
})

module.exports = router;