const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.pizza,
  config.db.toppings,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) => 
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name]
  })

db.sequelize = sequelize
db.Sequelize = Sequelize
 
module.exports = db