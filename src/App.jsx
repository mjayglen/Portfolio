import { useState } from 'react'

import './assets/Styles/default.css'

import Header from './assets/Components/Header/Header'
import Hero from './assets/Components/Hero/Hero'
import Projects from './assets/Components/Projects/Projects'
import Knowledge from './assets/Components/Knowledge/Knowledge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Projects/>
    <Knowledge/>
    </>
  )
}

export default App
