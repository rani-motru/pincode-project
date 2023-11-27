import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Pincode from './pages/Pincode';
// import Nasalist from './pages/Nasalist';
import About from './pages/About';

function App() {
 
  return (
    <div className='App'>
      <Nav />
      <br/>
      <br/>
     
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/pincode' element={<Pincode/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
</div>
  )
}

export default App
