import React, { useState } from "react";

const AddTodo = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        id="input"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        type="button"
        id="addtodo-button"
        onClick={() => handleAddTodo(value)}
      >
        Add Todo
      </button>
    </>
  );
};

export default AddTodo;
