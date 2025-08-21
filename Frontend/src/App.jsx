import React from 'react'
import { useState } from 'react'

function App() {
  const[count,setCount] = useState(0);


  function incr(){
    setCount(count+1);
  }

  function decr(){
    if(count>0){
      setCount(count - 1);
    }
  }

  function reset(){
    setCount(0)
  }

  return (
    <div>
      <h1>
        Welcome to My React App
      </h1>
      <button onClick={incr}>
        Increment Count {count}
      </button>
      <button onClick={decr}>
        Decrement Count {count}
      </button>
      <button onClick={reset}>
        Reset Count {count}
      </button>
      
    </div>
  )
}

export default App
