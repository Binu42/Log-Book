const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  type: {
    type: String,
    default: 'personal'
  },
  date: {
    type: String,
    default: Date.now
  }
})

module.exports = mongoose.model('contacts', contactSchema);