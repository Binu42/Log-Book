const express = require("express");
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth')
const User = require('../models/User');
const Contact = require('../models/Contact');

const router = express.Router();

// @route       GET /api/contacts
// @desc        Get all contacts
// @access      private
router.get('/', auth, async (req, res) => {
  try {
    const contact = await Contact.find({ user: req.user.id }).sort({ date: -1 });
    res.status(200).json(contact)
  } catch (error) {
    console.error(error);
    res.status(500).send('server Error')
  }
})

// @route       post /api/contacts
// @desc        ADD new contacts
// @access      private
router.post('/', [auth, [
  check('name', 'Name is Required').not().isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, phone, type } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id
    })
    const contact = await newContact.save();
    res.status(200).send('new contact is saved');
  } catch (error) {
    console.error(error);
    res.status(500).send('server Error');
  }
})

// @route       PUT /api/contacts/:id
// @desc        Edit contacts
// @access      private
router.put('/:id', (req, res) => {
  res.send('sdakjf');
})

// @route       DELETE /api/contacts/:id
// @desc        Delete contacts
// @access      private
router.delete('/:id', (req, res) => {
  res.send('sdakjf');
})

module.exports = router;