import { useState } from 'react'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Products from './pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/products" Component={Products}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
