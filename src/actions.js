import db from "./db";

/*istanbul ignore next*/
export const fetchTodosFromDB = db => {
  return new Promise((resolve, reject) => {
    return db
      .table("todos")
      .toArray()
      .then(todos => resolve(todos));
  });
};
/*istanbul ignore next*/
export const handleAddTodo = (title, todos, setTodos, cb) => {
  const todo = {
    title,
    done: false
  };
  db.table("todos")
    .add(todo)
    .then(id => {
      const newList = [todos, Object.assign({}, todo, { id })];
      setTodos(newList);
    });
};
/*istanbul ignore next*/
export const handleToggleTodo = (id, done, todos, setTodos) => {
  db.table("todos")
    .update(id, { done })
    .then(() => {
      const todoToUpdate = todos.find(todo => todo.id === id);
      const newList = [
        todos.filter(todo => todo.id !== id),
        Object.assign({}, todoToUpdate, { done })
      ];
      setTodos(newList);
    });
};
/*istanbul ignore next*/
export const handleDeleteTodo = (id, todos, setTodos) => {
  db.table("todos")
    .delete(id)
    .then(() => {
      const newList = todos.filter(todo => todo.id !== id);
      setTodos(newList);
    });
};
