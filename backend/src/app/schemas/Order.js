import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
  {
    user: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    products: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    status: {
      type: String,
      required: true,
      enum: ['pending', 'paid', 'preparing', 'delivered'],
      default: 'pending',
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Order', OrderSchema)