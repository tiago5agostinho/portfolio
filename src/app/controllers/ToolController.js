import * as Yup from 'yup'
import Tool from '../models/Tool'

class ToolController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      area: Yup.string().required(),
    })
    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { filename: path } = request.file
    const { name, area } = request.body

    const tool = await Tool.create({
      name,
      area,
      path,
    })

    return response.json(tool)
  }

  async index(request, response) {
    const tool = await Tool.findAll()
    return response.json(tool)
  }
}

export default new ToolController()
