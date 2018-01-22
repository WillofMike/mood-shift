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
  }

})

module.exports = mongoose.model(model, schema)
