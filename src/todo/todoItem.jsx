import { useContext, useCallback, memo } from "react";
import PropTypes from "prop-types";
import Context from "../context";
// Import as URL to ensure the fragment identifier (e.g. #close) works
import sprite from "../img/sprite.svg?url";

function TodoItem({ todo, index }) {
  const { removeTodo, toggleTodo } = useContext(Context);

  // Memoize handlers to prevent creating new functions on each render
  const handleToggle = useCallback(() => {
    toggleTodo(todo.id);
  }, [toggleTodo, todo.id]);

  const handleRemove = useCallback(() => {
    removeTodo(todo.id);
  }, [removeTodo, todo.id]);

  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="listItem">
      <label className={classes.join(" ")}>
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={todo.completed}
        />
        <span />
        <p>{index + 1}</p>&nbsp;
        {todo.title}
      </label>
      <button className="button" onClick={handleRemove}>
        <svg width="15px" height="15px" style={{ color: '#000' }} aria-hidden>
          <use href={`${sprite}#close`} />
        </svg>
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

// Memoize component to prevent re-renders when props don't change
export default memo(TodoItem);
