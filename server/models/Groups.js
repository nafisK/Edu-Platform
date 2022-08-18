const mongoose = require('mongoose')
const Users = require('./Users')

// Nested documents ref: https://stackoverflow.com/questions/37537493/how-to-create-an-embedded-document-that-follows-a-model-with-mongoose

const GroupSchema = mongoose.Schema({
  members: [],
})

module.exports = mongoose.model('groups', GroupSchema)
