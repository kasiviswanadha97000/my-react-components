import React, { useReducer } from "react";

const initialState = { count: 0, errorMsg:'' };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
       if(state.count < 5) 
           return { ...state, count: state.count + 1, errorMsg: ''}
        else
           return { ...state, errorMsg: "Do not exceed more than 5"}
       
    case "decrement": 
     if(state.count > 0) 
           return {  ...state, count: state.count - 1,  errorMsg: ''}
        else
           return { ...state, errorMsg: "Should not be negitive values"}

    default: return state;
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <center id="UseReducerHook-comp" style={{paddingTop: "45px"}}>
      <p>Count: {state.count}</p>
      <p style={{ color: "red" }}>{state.errorMsg}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
    </center>
  );
}

export default UseReducerHook;