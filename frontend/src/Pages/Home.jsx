import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Tools from '../components/Tools'
import FeedBackForm from '../components/FeedBackForm'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div >
      <div className="fixed top-0">
      <Navbar/>
      </div>


      <div>
        <Hero/>
        <About/>
        <Tools/>
        <FeedBackForm/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home