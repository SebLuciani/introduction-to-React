import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("ForestGreen")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-non px-4 py-1 rounded-full text-black shadow-lg' onClick={() => setColor("ForestGreen")}>
            Green</button>
          <button className='outline-non px-4 py-1 rounded-full text-black shadow-lg' onClick={() => setColor("white")}>
            White</button>
          <button className='outline-non px-4 py-1 rounded-full text-black shadow-lg' onClick={() => setColor("FireBrick")}>
            Red</button>
          <button className='outline-non px-4 py-1 rounded-full text-black shadow-lg' >
            Mexico</button>
        </div>
      </div>
    </div>
  )
}

export default App




/*    ---------------------INTUITIVE APPROACH------------------------- 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("ForestGreen")

  function changeColor(color) {
    setColor(color)
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-non px-4 py-1 rounded-full text-black shadow-lg' onClick={() => changeColor("ForestGreen")}>
            Green</button>
          <button className='outline-non px-4 py-1 rounded-full text-black shadow-lg' onClick={() => changeColor("white")}>
            White</button>
          <button className='outline-non px-4 py-1 rounded-full text-black shadow-lg' onClick={() => changeColor("FireBrick")}>
            Red</button>
          <button className='outline-non px-4 py-1 rounded-full text-black shadow-lg' >
            Mexico</button>
        </div>
      </div>
    </div>
  )
}

export default App
*/