export const todoReducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { ...state, todoValue: action.payload };
    case "add":
      return {
        ...state,
        todoValue: "",
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: state.todos.length + 1,
          },
        ],
      };
    case "complete":
      const todos = [...state.todos].map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
      return { ...state, todos: todos };
    default:
      throw new Error("type not defined");
  }
};
