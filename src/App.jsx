import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Content from './components/Content'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Content/>
      <Testimonials/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
