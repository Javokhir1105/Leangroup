import React from 'react'
import '../hero/Hero.css'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-container">
        <ul className="hero-item">
          <p className="hero-item-p">LEANGROUP - тубы и этикетки</p>
          <h1 className="hero-item-h1">Ламинатные тубы</h1>
          <p className="hero-item-p1">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
          <button className="hero-item-button">Каталог</button>
        </ul>
      </div>
    </div>
  )
}
export default Hero