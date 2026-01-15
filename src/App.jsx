import {
  useCallback,
  useEffect,
  useState,
  useMemo,
  lazy,
  Suspense,
} from "react";
import Context from "./context";
import Loader from "./loader/loader.jsx";
import TextLoader from "./loader/loaderText.jsx";
import { debounce } from "./utils/index.js";

const TodoAddItem = lazy(() => import("./todo/todoAddItem.jsx"));
const TodoList = lazy(() => import("./todo/todoList.jsx"));

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(true);

  const fetchRequest = useCallback(() => {
    if (todos.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((response) => response.json())
        .then((fetchedTodos) => {
          setTimeout(() => {
            setTodos(fetchedTodos);
            setLoading(false);
          }, 2000);
        });
    } else {
      setLoading(false);
    }
  }, [todos.length]);

  const toggleTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const addTodo = useCallback((title) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { title, id: Date.now(), completed: false },
    ]);
  }, []);

  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  useEffect(() => {
    const saveTodos = debounce(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 500);

    if (!loading) {
      saveTodos();
    }
  }, [todos, loading]);

  const contextValue = useMemo(
    () => ({ removeTodo, toggleTodo }),
    [removeTodo, toggleTodo]
  );

  return (
    <Context.Provider value={contextValue}>
      {loading ? (
        <Loader />
      ) : (
        <div className="wrapper">
          <h1 className="header">Todo List</h1>
          <Suspense fallback={<TextLoader />}>
            <TodoAddItem onCreate={addTodo} />
          </Suspense>
          <Suspense fallback={<TextLoader />}>
            {todos.length ? (
              <TodoList todos={todos} />
            ) : loading ? null : (
              <p>no data!</p>
            )}
          </Suspense>
        </div>
      )}
    </Context.Provider>
  );
}

export default App;
