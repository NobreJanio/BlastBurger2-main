import * as Yup from 'yup'
import Order from '../models/Order.js'

class OrderController {
  async store(request, response) {
    const schema = Yup.object().shape({
      products: Yup.array().required(),
      total: Yup.number().required()
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    try {
      const { products, total } = request.body
      const { userId: id, userName: name } = request

      const order = await Order.create({
        user: { id, name },
        products,
        total,
      })

      return response.status(201).json(order)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async index(request, response) {
    try {
      const orders = await Order.find()
      return response.json(orders)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      status: Yup.string().required()
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    try {
      const { id } = request.params
      const { status } = request.body

      const order = await Order.findById(id)

      if (!order) {
        return response.status(404).json({ error: 'Order not found' })
      }

      await order.updateOne({ status })

      return response.json({ message: 'Status updated successfully' })
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new OrderController()