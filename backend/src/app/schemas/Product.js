import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
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
    price: {
      type: Number,
      required: true,
    },
    path: {
      type: String,
      required: false,
    },
    offer: {
      type: Boolean,
      default: false,
    },
    category_id: {
      type: String,
      required: false,
    },
    category: {
      id: {
        type: String,
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Product', ProductSchema)