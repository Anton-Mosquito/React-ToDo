import React, { useEffect } from "react";
import Context from "./context";
import TodoList from "./todo/todoList";
import Loader from "./loader/loader";
import TextLoader from "./loader/loaderText";

const TodoAddItem = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./todo/todoAddItem"));
    }, 3000);
  });
});

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const addTodo = (title) => {
    setTodos(
      todos.concat([{ title: title, id: Date.now(), completed: false }])
    );
  };

  return (
    <Context.Provider
      value={{ removeTodo: removeTodo, toggleTodo: toggleTodo }}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="wrapper">
          <h1 className="header">Todo List</h1>
          <React.Suspense fallback={<TextLoader />}>
            <TodoAddItem onCreate={addTodo} />
          </React.Suspense>
          {todos.length ? (
            <TodoList todos={todos} />
          ) : loading ? null : (
            <p>no data!</p>
          )}
        </div>
      )}
    </Context.Provider>
  );
}

export default App;
