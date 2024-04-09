import React, { useEffect, useState } from "react";

// 5 == 5 true
// "hello" == "hello" true
// [1, 2, 3] == [1, 2, 3] false

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [search, setSearch] = useState("");


  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleClick() {
    if (todo != "") {
      setTodos([...todos, { id: todos.length + 1, description: todo }]);
      setTodo("");
    }
  }

  return (
    <div>
      <input
        value={todo}
        type="text"
        placeholder="Add a new todo"
        onChange={handleTodoChange}
      />
      <button onClick={handleClick}>Add</button>
      <br />
      <input
        value={search}
        type="search"
        placeholder="Search todo..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <h3>Students List</h3>
      {search == "" && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.description}</li>
          ))}
        </ul>
      )}
      {search != "" && (
        <ul>
          {todos
            .filter((todo) => todo.description.startsWith(search))
            .map((todo) => (
              <li key={todo.id}>{todo.description}</li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
