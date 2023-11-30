import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Pincode from './pages/Pincode';
import Region from './pages/Region';
// import Nasalist from './pages/Nasalist';
import About from './pages/About';
import Footer from './components/Footer';
function App() {
 
  return (
    <div className='App'>
      <Nav />
      <br/>
      <br/>
     
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/pincode' element={<Pincode/>} />
        <Route path='/region' element={<Region/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
</div>
  )
}

export default App
