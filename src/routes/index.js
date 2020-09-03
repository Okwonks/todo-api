const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    version: 'v1.0.0',
    message: 'Todos API',
  }));

  app.post('/api/todos/', todosController.create);
  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.get( '/api/todos/', todosController.list);
  app.get( '/api/todos/:todoId', todosController.findWithId);
};
