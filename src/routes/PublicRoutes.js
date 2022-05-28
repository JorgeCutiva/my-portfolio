import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AboutMe from 'pages/aboutMe/AboutMe'
import HomePage from 'pages/homepage/HomePage'

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  )
}

export default PublicRoutes
