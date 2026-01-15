import { memo } from "react";
import TodoItem from "./todoItem.jsx";
import PropTypes from "prop-types";

function TodoList(props) {
  return (
    <ul className="list">
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// Memoize to prevent re-renders when todos array reference doesn't change
export default memo(TodoList);
