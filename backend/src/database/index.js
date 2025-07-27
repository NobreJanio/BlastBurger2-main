import Sequelize from 'sequelize'
import databaseConfig from '../config/database.js'
import User from '../app/models/User.js'
import Product from '../app/models/Product.js'
import Category from '../app/models/Category.js'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
  }

  init() {
    // Se há uma URL, use-a diretamente; caso contrário, use o objeto de configuração
    if (databaseConfig.url) {
      this.connection = new Sequelize(databaseConfig.url, {
        dialect: databaseConfig.dialect,
        dialectOptions: databaseConfig.dialectOptions,
        pool: databaseConfig.pool,
        define: databaseConfig.define,
        logging: databaseConfig.logging,
      })
    } else {
      this.connection = new Sequelize(databaseConfig)
    }
    
    models.map((model) => model.init(this.connection))
    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models)
      }
    })
  }
}

export default new Database()