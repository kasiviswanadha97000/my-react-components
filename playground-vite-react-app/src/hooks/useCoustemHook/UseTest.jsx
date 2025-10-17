/* import React, { useEffect, useRef, useState } from 'react'

export function useTest(e, delay= 500) {
    const [value, setValue] = useState();

    useEffect(()=>{
        const timer = setTimeout(()=> {
         setValue(e)
        }, delay)

        return () => clearTimeout(timer);
    },[e, delay])

  return value;
}


export function useTestCallBack(callback, delay= 500) {
    const timer = useRef(null);
    
     return (...args) => {
        if(timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(()=> {
         callback(...args);
        }, delay)
    };
} */

import React, { useReducer } from 'react'

const initialState = {
  count : 0,
  errorMsg: ""
};

function reduceFun(state, action) {
  switch(action.type) {    
    case "increment":
        if(state.count < 5)
          return {...state, count: state.count + 1, errorMsg:"" }
         else     
          return {...state, errorMsg: "Count value should not more than 10" }

    case "decrement":
        if(state.count > 0)
          return {...state, count: state.count - 1, errorMsg:"" }
         else     
          return {...state, errorMsg:"Count value should not less than 0" }

        default:
            return state;
    }
}

export default function UseTest() {
    const [state, dispatch] = useReducer(reduceFun, initialState);
  return (
    <div>
      <center>
        <button type="button" onClick={() => dispatch({type: "increment"})}>+</button>
        <p>{state.count}</p>
        {state.errorMsg &&  <p>{state.errorMsg}</p>}
        <button type="button" onClick={() => dispatch({type: "decrement"})}>-</button>
      </center>
    </div>
  )
}
