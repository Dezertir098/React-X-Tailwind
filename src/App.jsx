import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

import Header from './Header'; 
import Slider from './Slider'; 
import New from './New'; 
import Form from './Form'; 
import Brand from './Brand';
import Cust from './Cust'; 
import Map from './Map'; 
import Footer from './Footer'; 



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Slider />
      <New />
      <Form />
      <Brand />
      <Cust />
      <Map />
      <Footer />
    </div>
  )
}

export default App