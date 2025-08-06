import { useState } from 'react'

import './assets/Styles/default.css'

import Header from './assets/Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    </>
  )
}

export default App
