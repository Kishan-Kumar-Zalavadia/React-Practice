import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
};

export default function Todo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // const calculation = expensiveCalculation();
  // ! useMemo
  const calculation = useMemo(()=> expensiveCalculation(count),[count]);
  // * Storing inside a cache
  console.log("Re-render")
  const increase = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>Todo</h2>
        <button onClick={addTodo}>Add Todo</button>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increase}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>

      {/* // ! Navigate to other link */}
      {/* // * Click the button to navigate */}
      {/* <button >User List</button> */}
      <Link to={'/user-list'}>User List</Link>

      {/* // ! Navigate */}
      {/* // * Navigate directly to about if count = 5 */}
      {count === 5 && <Navigate to={'/about'}> About </Navigate>}
    </div>
  );
}