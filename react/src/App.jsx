import { useState } from 'react'
import './App.css'
import PeopleContainer from './components/03/PeopleContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Basics/> */}
      {/*<div class="flex">
        <AvatarCard Name="Matteo" Surname="Kleber" Age="18" Profession="Student" Description="MK on top"/>
        <AvatarCard Name="Peter" Surname="Gsteu" Age="18" Profession="Student" Description="peta"/>
        <AvatarCard Name="Matthias" Surname="hagen" Age="19" Profession="Student" Description="Eishocky"/>
        <AvatarCard Name="Valentin" Surname="Gächter" Age="18" Profession="Student" Description="vali <3"/>
      </div>*/}
      <PeopleContainer/>
     </>
  )
}

export default App