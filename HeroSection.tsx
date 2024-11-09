import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <section className="hero">

<div className="hero-content">

   <h1 className="hero-title">
        My-Portfolio
   </h1>
     
   <h2 className="hero-subtitle">
        I'Am FRONT-END DEVELOPER
   </h2>
     
   <button type="button" className="hero-button"> <Link href="https://github.com/basmak12 ">
        My GITHUB Account Button
        </Link>
   </button>

</div>

</section>
    </div>
  )
}

export default HeroSection
