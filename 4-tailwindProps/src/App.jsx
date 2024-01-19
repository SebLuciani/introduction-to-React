import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae?</h1>
      <Card /> 
      <br/>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum deserunt explicabo repudiandae alias eos.</h1>
      <Card description='Esta vez vamos a poner una persona' source='https://images.pexels.com/photos/14875250/pexels-photo-14875250.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'/> 
    </>
  )
}

export default App
