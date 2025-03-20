import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Home from './Pages/Dashboard/Home'

const ProjectManagement = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default ProjectManagement
