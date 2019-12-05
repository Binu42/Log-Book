const express = require("express");

const router = express.Router();

// @route       GET /api/contacts
// @desc        Get all contacts
// @access      private
router.get('/', (req, res) => {
  res.send('sdakjf');
})

// @route       post /api/contacts
// @desc        ADD new contacts
// @access      private
router.post('/', (req, res) => {
  res.send('sdakjf');
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