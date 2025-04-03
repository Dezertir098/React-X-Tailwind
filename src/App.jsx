import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

import Header from './Header'; 
import Fotter from './Fotter';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Fotter /> 
    </div>
  )
}

export default App