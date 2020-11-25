import db from "./db";
// class Actions {
//   constructor(db) {
//     this.db = db;
//   }

//   static handleAddTodo(title, todos, setTodos) {
//     const todo = {
//       title,
//       done: false
//     };
//     this.db
//       .table("todos")
//       .add(todo)
//       .then(id => {
//         const newList = [todos, Object.assign({}, todo, { id })];
//         setTodos(newList);
//       });
//   }

//   static handleToggleTodo(id, done, todos, setTodos) {
//     this.db
//       .table("todos")
//       .update(id, { done })
//       .then(() => {
//         const todoToUpdate = todos.find(todo => todo.id === id);
//         const newList = [
//           todos.filter(todo => todo.id !== id),
//           Object.assign({}, todoToUpdate, { done })
//         ];
//         setTodos(newList);
//       });
//   }

//   static handleDeleteTodo(id, todos, setTodos) {
//     db.table("todos")
//       .delete(id)
//       .then(() => {
//         const newList = todos.filter(todo => todo.id !== id);
//         setTodos(newList);
//       });
//   }
// }

// export const {handleDeleteTodo,handleAddTodo, handleToggleTodo } = new Actions(db);
/*istanbul ignore next*/
export const handleAddTodo = (title, todos, setTodos) => {
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
