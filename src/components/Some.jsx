import React from "react";

export const Some = (props) => {

const [counter, setCounter] = React.useState(2)

const addOne = () => {
  setCounter (counter * 3)
}


  return (<>
  <h1>{counter}</h1>
  <button onClick={addOne}>Click</button>
  
  </>)
  
};