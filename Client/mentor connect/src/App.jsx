import { useState } from 'react'

import './App.css'
import Router from './Components/Router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <Router/>
      <Footer/>
    </>
  )
}

export default App
