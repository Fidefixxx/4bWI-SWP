import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import List from './components/List'
import Button from './components/button'
import AvatarCard from './components/AvatarCard'

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
        <Card name="Ömer" job="Teacher" desc="School-Teacher "/>
        <Card name="Cem" job="Manager" desc="Project Manager"/>
        <Card name="Matteo" job="CEO" desc="CEO of Facebook"/>
        <Card name="Turancan" job="Cook" desc="Cook in Dornbirn"/>
        <Card name="Zeki" job="Mechanic" desc="Mechanic for VW"/>
      </div>
      <div>
        <List length={4} data={["Lisdsadfhisbfphadsbfphbfdphafbphbpjfbasdfhbtitem", "Nocheins", "und des dritte", "lorem impsum dings da"]}/>
      </div>
      <div>
        <Button text="djabfjhfbphewbfphqewbfhp"/>
      </div>
      <div class="flex">
        <AvatarCard Name="Matteo" Surname="Kleber" Age="18" Profession="Student" Description="MK on top"/>
        <AvatarCard Name="Peter" Surname="Gsteu" Age="18" Profession="Student" Description="peta"/>
        <AvatarCard Name="Matthias" Surname="hagen" Age="19" Profession="Student" Description="Eishocky"/>
        <AvatarCard Name="Valentin" Surname="Gächter" Age="18" Profession="Student" Description="vali <3"/>
      </div>
     </>
  )
}

export default App