// import { useState } from "react"
import React from "react"
import { useState } from "react"


const Counter =()=>{

  const [count,setCount]  = useState(0)
  return (
    <>
    <h1>Counter App</h1>
    <p>Count: {count}</p>
    <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
    </>
  )
}

export default Counter