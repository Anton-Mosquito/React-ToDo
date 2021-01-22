import React, { useEffect } from "react";
import Context from "./context";
import Loader from "./loader/loader";
import TextLoader from "./loader/loaderText";

const TodoAddItem = React.lazy(() => import("./todo/todoAddItem"));
const TodoList = React.lazy(() => import("./todo/todoList"));

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
    setTodos(todos.filter((todo) => todo.id !== id));
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
          <React.Suspense fallback="">
            <TodoAddItem onCreate={addTodo} />
          </React.Suspense>
          <React.Suspense fallback={<TextLoader />}>
            {todos.length ? (
              <TodoList todos={todos} />
            ) : loading ? null : (
              <p>no data!</p>
            )}
          </React.Suspense>
        </div>
      )}
    </Context.Provider>
  );
}

export default App;
