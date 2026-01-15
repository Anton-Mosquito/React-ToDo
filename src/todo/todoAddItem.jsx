import { useCallback, useState } from "react";
import PropTypes from "prop-types";

function TodoAddItem({ onCreate }) {
  const [value, setValue] = useState("");

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (value.trim()) {
        onCreate(value);
        setValue(" ");
      }
    },
    [onCreate, value]
  );

  return (
    <form action="" onSubmit={submitHandler} className="form">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
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
