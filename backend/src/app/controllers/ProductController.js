import * as Yup from 'yup'
import { v4 } from 'uuid'
import Product from '../schemas/Product.js'
import Category from '../schemas/Category.js'

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
      const { name, price, category_id, offer } = request.body
      const { filename: path } = request.file || {}

      if (!path) {
        return response.status(400).json({ error: 'Please provide a product image' })
      }

      // Buscar categoria para incluir os dados
      const category = await Category.findOne({ id: category_id })

      const product = await Product.create({
        id: v4(),
        name,
        price: parseFloat(price),
        category_id,
        path,
        offer: offer || false,
        category: category ? { id: category.id, name: category.name } : null,
      })

      return response.json(product)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async index(request, response) {
    try {
      const products = await Product.find({})

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

      const product = await Product.findOne({ id })

      if (!product) {
        return response.status(404).json({ error: 'Product not found' })
      }

      let path
      if (request.file) {
        path = request.file.filename
      }

      // Buscar categoria se category_id foi fornecido
      let category = product.category
      if (category_id && category_id !== product.category_id) {
        const categoryData = await Category.findOne({ id: category_id })
        category = categoryData ? { id: categoryData.id, name: categoryData.name } : null
      }

      const updatedProduct = await Product.findOneAndUpdate(
        { id },
        {
          name: name || product.name,
          price: price !== undefined ? parseFloat(price) : product.price,
          category_id: category_id || product.category_id,
          path: path || product.path,
          offer: offer !== undefined ? offer : product.offer,
          category: category,
        },
        { new: true }
      )

      return response.json(updatedProduct)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params

      const product = await Product.findOne({ id })

      if (!product) {
        return response.status(404).json({ error: 'Product not found' })
      }

      await Product.deleteOne({ id })

      return response.status(204).send()
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new ProductController()