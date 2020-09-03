const { Sequelize, DataTypes } = require('sequelize')

const database = new Sequelize('postgres://localhost/node_orm')

const Title = database.define('title', {
  id: { type: DataTypes.UUIDV4, primaryKey: true },
  title: { type: DataTypes.JSONB, allowNull: false }
})

const Service = database.define('service', {
  id: { type:DataTypes.INTEGER, autoIncrement:true },
  userId: { type: DataTypes.STRING, unique: 'user-name', allowNull: false },
  name: { type: DataTypes.STRING, unique: 'user-name', allowNull: false }
})

const TitleService = database.define('title_service', { location: DataTypes.STRING })

TitleService.belongsTo(Title, {
  foreignKey: { allowNull: false, unique: 'title-service' },
  onDelete: 'cascade'
})

TitleService.belongsTo(Service, {
  foreignKey: { allowNull: false, unique: 'title-service' },
  onDelete: 'cascade'
})

module.exports = {
  Title,
  Service,
  TitleService,
  database
}
