import { useState } from 'react'

import './App.css'
import Router from './Components/Router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar/>
      <Router/>
      <Footer/>
    </>
  )
}

export default App

//3868
