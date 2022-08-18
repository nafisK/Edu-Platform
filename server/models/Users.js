const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  group: {
    type: String,
    default: 'none',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  points: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model('Users', UserSchema)
