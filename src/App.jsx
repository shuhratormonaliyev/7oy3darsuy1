import React, {lazy, Suspense } from 'react'
import { Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from "./components/Footer"
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
function App() {
  return (
    <div>
      <Header></Header>
      <Suspense fallback={<div className="text-center p-4">Yuklanmoqda...</div>}>
        <Routes >   
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
      </Routes>
    </Suspense>
    <Footer></Footer>
    </div>
  )
}

export default App
