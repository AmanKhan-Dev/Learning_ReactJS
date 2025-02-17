import { useState } from "react";
import Button from '@mui/material/Button'

function Counter(){
const [count,setCount] = useState(0);


// Updater Function: setCount is called with an updater function prevCount => prevCount + 1, which takes the previous state (prevCount) and returns the new state.


const[name,setname] = useState();
const increment = () => {
  setCount(c => c+1)
  setCount(c => c+1);
  setCount(c => c+1);


};
const decrement = () =>{
  setCount(c => c-1)
  setCount(c => c-1);
  setCount(c => c-1);

};
const reset = () => setCount(0);

const setUsername = () => {
    const newName = window.prompt("Enter your Name:");
    if (newName) {
      setname(`Good Morning, ${newName}`);
    }
  };
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
      
<h2>{name}</h2>
<Button onClick={setUsername} variant="text" color="default">
  SET NAME
</Button>


</>
);

}

export default Counter;