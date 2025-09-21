import { useState } from "react";

function ListGroup() {
  // Example 1: Simple items list
  const cities = ["New York", "California", "Tokyo", "Vancouver", "London"];

  // Example 2: Conditional message
  const getMessage = () => {
    return cities.length === 0 && <p>No cities found</p>;
  };

  // Example 3: Button click
  const handleClick = () => {
    alert("Button clicked!");
  };

  // Example 4: State with input
  const [name, setName] = useState("");

  // Example 5: Todo list
  const [todos, setTodos] = useState(["Learn React"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <>
      <h1>React Playground</h1>

      {/* 1. List of cities */}
      <h2>Cities</h2>
      {getMessage()}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li key={index}>
            {index + 1}. {city}
          </li>
        ))}
      </ul>

      {/* 2. Button Example */}
      <h2>Button</h2>
      <button onClick={handleClick} className="btn btn-primary">
        Click Me
      </button>

      {/* 3. Input Example */}
      <h2>Input</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>

      {/* 4. Todo List Example */}
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
