import * as Yup from 'yup'
import { v4 } from 'uuid'
import Category from '../schemas/Category.js'

class CategoryController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name } = request.body
    const { filename: path } = request.file || {}

    const category = await Category.create({
      id: v4(),
      name,
      path,
    })

    return response.json(category)
  }

  async index(request, response) {
    try {
      const categories = await Category.find({})

      return response.json(categories)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { id } = request.params
    const { name } = request.body
    const { filename: path } = request.file || {}

    const category = await Category.findOne({ id })

    if (!category) {
      return response.status(404).json({ error: 'Category not found' })
    }

    const updatedCategory = await Category.findOneAndUpdate(
      { id },
      {
        name: name || category.name,
        path: path || category.path,
      },
      { new: true }
    )

    return response.json(updatedCategory)
  }

  async delete(request, response) {
    try {
      const { id } = request.params

      const category = await Category.findOne({ id })

      if (!category) {
        return response.status(404).json({ error: 'Category not found' })
      }

      await Category.deleteOne({ id })

      return response.status(204).send()
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new CategoryController()