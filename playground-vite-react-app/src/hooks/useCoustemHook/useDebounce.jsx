import React from 'react'
import { useRef } from 'react';

export function useDebounce(value, delay = 300) {
const [debounceValue, setDebonceValue] = React.useState("");

React.useEffect(() => {
    const timer = setTimeout(() => setDebonceValue(value), delay);
    return () => clearTimeout(timer);
}, [value, delay])
  
  return debounceValue;
}

// useDebouncedCallback.js
export function useDebouncedCallback(callback, delay = 300) {
  const timer = useRef(null);

  return (...args) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
