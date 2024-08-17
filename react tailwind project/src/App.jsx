import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ResponsiveMenu from './components/Navbar/ResponsiveMenu'
import Hero from './components/Hero/Hero'
import Menus from './components/Menus/Menus'
import Banner from './components/Banners/Banner'
import Banner2 from './components/Banners/Banner2'
import Banner3 from './components/Banners/Banner3'
import Footer from './components/Footer/Footer'
// import {BrowerRoutes,Route, Routes} from "react-router-dom"
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <main className='overfloe-x-hidden'>
      <Navbar/>
      <ResponsiveMenu/>
      <Hero/>
      <Menus/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Footer/>
    </main>

    {/* <Router>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='about' element ={<About/>}/>
      <Route path='service' element ={<Service/>}/>
      
      
    </Routes>
    </Router> */}
    </>
  )
}

export default App
