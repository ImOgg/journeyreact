import React from 'react'
import { useState, useEffect } from 'react';
const CartPage = () => {
  let [counter, setcounter] = useState(0);
  const handle = () => {
    setcounter(counter + 1);
  }
  const handle2 = () => {
    setcounter(counter - 1);
  }
  const reset = () => {
    setcounter(0);
  }
  useEffect(() => {
    console.log(counter)
  }, [counter])

  return (
    <div>
      <h2>{counter}</h2>

      <button onClick={handle}>點我+1</button>
      <button onClick={handle2}>點我-1</button>
      <button onClick={reset}>重置</button>
    </div>
  )
}

export default CartPage