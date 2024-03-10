import TodoContainer from "./components/TodoContainer";
import React, { FC, useReducer, useState } from "react";
import { todoReducer } from "./components/utils";
import TodoForm from "./components/TodosForm";
import "./App.css";

const appDarkColor = "#042b2b";
const appLightColor = "skyblue";
const containerDark = "#1c5358";
const containerLight = "lightgreen";

const initialState = {
  todoValue: "",
  todos: [],
};
export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // const [val, setVal] = useState("true");
  console.log("app render");
  const markComplete = React.useCallback(
    (id) => {
      dispatch({ type: "complete", id });
    },
    [dispatch]
  );
  const backgroundColor = "skyblue";
  return (
    <div className="App" style={{ backgroundColor }}>
      {/* <div style={{ position: "absolute", top: "1rem", right: "2rem" }}>
        <input
          id="toggle"
          className="toggle"
          type="checkbox"
          value={val}
          onChange={(e) => console.log(e)}
        />
      </div> */}
      <TodoContainer>
        <TodoForm state={state} dispatch={dispatch} />
        {state.todos?.map((e) => (
          <li
            style={{
              marginTop: "1rem",
              textDecoration: e.completed ? "line-through" : "none",
            }}
            onClick={() => markComplete(e.id)}
            key={e.id}
          >
            {e.item}
          </li>
        ))}
      </TodoContainer>
    </div>
  );
}
