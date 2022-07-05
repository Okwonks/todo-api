const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return Todo
      .create({ title:req.body.title })
      .then(todo => res.status(200).send(todo))
      .catch(err => res.status(400).send(err));
  },
  list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todos => res.status(200).send(todos))
      .catch(err => res.status(400).send(err));
  },
  findWithId({ params }, res) {
    return Todo
      .findOne({
        where: { id:params.todoId },
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => !todo
        ? res.status(404).send({ message:`Todo ${params.todoId} not found` })
        : res.status(200).send(todo))
      .catch(err => res.status(400).send(err));
  },
  update({ body, params }, res) {
    return Todo
      .findOne({
        where: { id:params.todoId },
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if(todo) {
          return todo
            .update({
              title: body.title || todo.title
            });
        }
        res.status(404).send({ message:`Todo ${params.todoId} not found` });
      })
      .catch(err => res.status(400).send(err));
  },
};
