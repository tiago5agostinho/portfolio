import Sequelize from 'sequelize'

import configDatabase from '../config/database'

import User from '../app/models/User'
import Tool from '../app/models/Tool'

const models = [User, Tool]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDatabase)
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }
}

export default new Database()
