const { Schema } = require('mongoose')

const foodSchema = new Schema(
  {
    location: { type: String, required: true },
    meals: { type: Array, required: true },
    name: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = foodSchema
