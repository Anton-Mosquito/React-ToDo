import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";
import sprite from "../img/sprite.svg";

function TodoItem({ todo, index }) {
  const { removeTodo } = useContext(Context);
  const { toggleTodo } = useContext(Context);

  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="listItem">
      <label className={classes.join(" ")}>
        <input
          type="checkbox"
          onChange={toggleTodo.bind(null, todo.id)}
          checked={todo.completed}
        />
        <span></span>
        <p>{index + 1}</p>&nbsp;
        {todo.title}
      </label>
      <button className="button" onClick={removeTodo.bind(null, todo.id)}>
        <svg width="15px" height="15px">
          <use href={sprite + "#close"}></use>
        </svg>
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
