import { useState } from "react";

function Counter(){
const [count,setCount] = useState(0)

const increment = () => setCount(count +1);
const decrement = () =>setCount(count -1);
const reset = () => setCount(0);



return(
    <>
<h1>{count}</h1>
  <button onClick={increment} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Increse
  </button>
    <button onClick={decrement} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Decrese
    </button>
      <button onClick={reset} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Reset
      </button>



</>
);

}

export default Counter;