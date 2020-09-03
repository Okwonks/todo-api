const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    const { description } = req.body;
    const { todoId } = req.params;
    return TodoItem
      .create({ description, todoId })
      .then(todoItem => res.status(200).send(todoItem))
      .catch(err => res.status(400).send(err));
  },
};
