import * as Yup from 'yup'
import Product from '../models/Product.js'
import Category from '../models/Category.js'

class ProductController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.string().required(),
      offer: Yup.boolean()
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    try {
      const { filename: path } = request.file
      const { name, price, category_id, offer } = request.body

      if (!path) {
        return response.status(400).json({ error: 'Please provide a product image' })
      }

      const product = await Product.create({
        name,
        price,
        category_id,
        path,
        offer: offer || false,
      })

      return response.json(product)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async index(request, response) {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: Category,
            as: 'category',
            attributes: ['id', 'name'],
          },
        ],
      })

      return response.json(products)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      price: Yup.number(),
      category_id: Yup.string(),
      offer: Yup.boolean()
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    try {
      const { id } = request.params
      const { name, price, category_id, offer } = request.body

      const product = await Product.findByPk(id)

      if (!product) {
        return response.status(404).json({ error: 'Product not found' })
      }

      let path
      if (request.file) {
        path = request.file.filename
      }

      await product.update({
        name,
        price,
        category_id,
        path: path || product.path,
        offer: offer !== undefined ? offer : product.offer,
      })

      return response.json(product)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params

      const product = await Product.findByPk(id)

      if (!product) {
        return response.status(404).json({ error: 'Product not found' })
      }

      await product.destroy()

      return response.status(204).send()
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new ProductController()