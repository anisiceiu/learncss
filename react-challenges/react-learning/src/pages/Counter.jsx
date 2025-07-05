import { useState } from "react";

const Counter=()=> {
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount((prevCount)=>
           prevCount + 1
        );
    }

    const decrement=()=>{
        setCount((prevCount)=>
           prevCount - 1
        );
    }

  return (
    <div>
        <h1>{count}</h1>
        <div>
            <button onClick={increment}>Increment (+1)</button>
            <button onClick={decrement}>Decrement (-1)</button>
        </div>
    </div>
  );
}

export default Counter;