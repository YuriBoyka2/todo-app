const TodoContainer = ({ children }) => {
  console.log("TodoContainer render");
  const backgroundColor = "lightgreen";
  return (
    <div className="todo-container" style={{ backgroundColor }}>
      {" "}
      {children}
    </div>
  );
};
export default TodoContainer;
