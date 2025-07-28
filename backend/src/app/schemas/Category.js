import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Category', CategorySchema)