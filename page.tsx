import React from 'react'
import Header from './compontent/Header'
import HeroSection from './compontent/HeroSection'
import Skills from './compontent/Skills'
import Footer from './compontent/footer'

const page = () => {
  return (
    <div className='bg-gradient-to-tr from-grey-200 to-black-200'>
      <Header></Header>
      <HeroSection></HeroSection>
      <Skills></Skills>
      <Footer></Footer>
      
    </div>
  )
}

export default page
