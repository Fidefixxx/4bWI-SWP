import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 py-3 px-5'>test1</h1>
      <h2 className='bg-yellow-500 p-5'>test2</h2>
      <h3 className='bg-red-200 border-5 border-red-900 p-5'>test3</h3>
      <h4 className='bg-blue-400 border-3 border-dashed border-blue-950 pt-5 '>test4</h4>
      <h5 className='bg-orange-500 border-3 border-dotted border-orange-950 m-5 p-2'>test5</h5>
      <h6 className='bg-emerald-600 border-10 border-double border-green-200 mx-10 p-3'>test6</h6>
      <div className='flex'>
        <Card name="John" job="Developer" desc="Frontend Developer"/>
        <Card name="John" job="Developer" desc="Frontend Developer"/>
        <Card name="John" job="Developer" desc="Frontend Developer"/>
        <Card name="John" job="Developer" desc="Frontend Developer"/>
        <Card name="John" job="Developer" desc="Frontend Developer"/>
        <Card name="John" job="Developer" desc="Frontend Developer"/>
      </div>
     </>
  )
}

export default App