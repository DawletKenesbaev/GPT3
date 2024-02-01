import React from 'react'

import Navbar from './components/navbar'
import Brand from './components/brand'
import CTA from './components/cta'
import Features from './components/feature'



import Header from './container/header'
import Footer from './container/footer'
import Blog from './container/blog'
import WhatGPT3 from './container/whatGPT3'
import Possibility from './container/possibility'


import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App