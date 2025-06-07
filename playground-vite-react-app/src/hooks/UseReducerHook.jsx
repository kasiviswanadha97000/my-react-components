import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="UseReducerHook-comp" style={{paddingTop: "15px"}}>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
}

export default UseReducerHook;