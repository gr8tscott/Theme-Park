const { Schema } = require('mongoose')

const ridesSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId },
    description: { type: String, required: true },
    img: { type: String, required: true },
    name: { type: String, required: true },
    speed: { type: String, required: true },
    minHeight: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = ridesSchema
