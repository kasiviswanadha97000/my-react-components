import React from 'react'

function UseEffect() {
  const [count, setCount] = React.useState(0);
  console.log("-------inside component---------");
  React.useEffect(() => {
    if(count)
      console.log("-------useEffect loops---------");// componentDidMount() -> It run after first render
  }, [count])
  return (
    <center style={{paddingTop:"2rem"}}>
      <button onClick={() => setCount(count+1) }>+</button>
    </center>
  )
}

export default UseEffect;
