import * as Yup from 'yup'
import Category from '../models/Category.js'

class CategoryController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      category_id: Yup.number().nullable()
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name, category_id } = request.body
    const { filename: path } = request.file || {}

    const category = await Category.create({
      name,
      category_id,
      path,
    })

    return response.json(category)
  }

  async index(request, response) {
    try {
      const categories = await Category.findAll({
        include: [
          {
            model: Category,
            as: 'subcategories',
            attributes: ['id', 'name'],
          },
        ],
      })

      return response.json(categories)
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      category_id: Yup.number().nullable()
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { id } = request.params
    const { name, category_id } = request.body
    const { filename: path } = request.file || {}

    const category = await Category.findByPk(id)

    if (!category) {
      return response.status(404).json({ error: 'Category not found' })
    }

    await category.update({
      name,
      category_id,
      path: path || category.path,
    })

    return response.json(category)
  }

  async delete(request, response) {
    try {
      const { id } = request.params

      const category = await Category.findByPk(id)

      if (!category) {
        return response.status(404).json({ error: 'Category not found' })
      }

      await category.destroy()

      return response.status(204).send()
    } catch (err) {
      console.error(err)
      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new CategoryController()