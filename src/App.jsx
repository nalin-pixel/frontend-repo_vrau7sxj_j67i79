import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#06070A]">
      <Navbar />
      <Hero />
      <Sections />
    </div>
  )
}

export default App
