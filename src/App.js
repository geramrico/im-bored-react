import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BoredToo from './pages/BoredToo'

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen p-3 bg-base-200'>
        <Navbar title='Im Bored' />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/imboredtoo' element={<BoredToo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
