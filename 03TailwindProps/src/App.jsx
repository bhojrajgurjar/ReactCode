import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObjet={
    name:"Ram",
    age:24
  }
  let myArr = [1,3,45]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>TailWind</h1>
      
      <Card username="Bhojraj" btnTxt='Click here' obj={myObjet} arr={myArr}/>
      <Card username="Radhe" btnTxt='View Profile'/>
      <Card username="Krishna" />

    </>
  )
}

export default App
