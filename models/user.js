const mongoose = require("mongoose")
const model = 'user'

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model(model, schema)
