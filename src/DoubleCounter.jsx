import { useState } from "react";
import Button from '@mui/material/Button'

function DoubleCounter(){

  const[count,setCount] = useState(1);


  const incrementation = () =>{
   setCount(count * 2);
  }

  const decrementation = ()=>{
    setCount(count / 2);
  }

  const reset = ()=>{
    setCount(1);
  }

  const[realName,setRealName] = useState("");

function setNewName(namer){
  setRealName(namer.target.value);
}



return(

<>



<h1>The 2X Counter</h1>
<h2>Count : {count}</h2>


  <button onClick={incrementation} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    +
  </button>

    <button onClick={decrementation} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
-    </button>
  <button onClick={reset} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
Reset  </button>




    </>
);
}

export default DoubleCounter;
