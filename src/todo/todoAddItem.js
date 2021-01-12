import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function TodoAddItem({ onCreate }) {
  const input = useInputValue("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  };
  return (
    <form action="" onSubmit={submitHandler} className="form">
      <input type="text" {...input.bind} />
      <button type="submit" className="btnAdd">
        <span>Add todo</span>
      </button>
    </form>
  );
}

TodoAddItem.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default TodoAddItem;
