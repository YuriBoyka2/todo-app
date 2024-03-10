const TodoForm = ({ state, dispatch }) => {
  console.log("TodoForm render");
  return (
    <div className="input-container">
      <input
        value={state.todoValue}
        onChange={(e) => dispatch({ type: "change", payload: e.target.value })}
      />
      <button
        onClick={() =>
          state.todoValue && dispatch({ type: "add", payload: state.todoValue })
        }
      >
        {" "}
        Add
      </button>
    </div>
  );
};
export default TodoForm;
