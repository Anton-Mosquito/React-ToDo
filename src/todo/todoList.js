import React from "react";
import TodoItem from "./todoItem";
import PropTypes from "prop-types";

function TodoList(props) {
  return (
    <ul className="list">
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onTogle}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTogle: PropTypes.func.isRequired,
};

export default TodoList;
