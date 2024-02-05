const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  memo: {
    type: String,
    default: 'Add details!',
  },
  priority: {
    type: Number,
    default: 5,
  },
});

const Register = new mongoose.model('Memo', userSchema);

module.exports = Register;
