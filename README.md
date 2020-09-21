# Todo API

A nodejs CRUD API with Sequelize ORM

## Dev

### Requirements

* postgresql
* [sequelize](https://sequelize.org/)
* yarn

### Startup

1. yarn && run `npx sequelize db:create` (creates dev db `todo_dev`)
2. create tables `npx sequelize db:migrate`
3. start server: `yarn dev`
