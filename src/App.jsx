import { useState } from 'react'

import './assets/Styles/default.css'

import Header from './assets/Components/Header/Header'
import Hero from './assets/Components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    </>
  )
}

export default App
