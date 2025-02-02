import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Pages/Landing/Landing'
import Test from '../Test'
import Login from './Pages/Authentication/Login'
import Router from './Components/Router'
import MyProjectSection from './Pages/Home/Components/MyProjectSection'

function App() {

  return (
    <>
      <Router/>
    </>
  )
}

export default App
