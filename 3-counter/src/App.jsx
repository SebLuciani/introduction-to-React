import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(15)

  //let counter = 15;

  const addValue = () => {
    setCounter(counter+1)       // If I add multiple repetitions of setCounter it will only do one (crea un nuevo state entonces el resto no se reproduce o algo así)
    setCounter((prevCounter) => prevCounter + 1)    // Now it forces the program to keep the previous value to execute the next one
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>React course with hitesh {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button> { " " }
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
