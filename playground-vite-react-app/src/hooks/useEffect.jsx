import React from 'react'

function useEffect() {
  const [count, setCount] = React.useState(0);
  console.log("-------inside component---------");
  React.useEffect(() => {
    if(count)
      console.log("-------useEffect loops---------");// componentDidMount() -> It run after first render
  }, [count])
  return (
    <div style={{paddingTop:"2rem"}}>
      <button onClick={() => setCount(count+1) }>+</button>
    </div>
  )
}

export default useEffect;
