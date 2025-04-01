import Sequelize, { Model } from 'sequelize'

class Tool extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        area: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/tools-file/${this.path}`
          },
        },
      },
      {
        sequelize,
      },
    )
    return this
  }
}

export default Tool
