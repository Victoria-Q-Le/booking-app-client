import React from 'react'
import "./featured.css"
import hoiAn from "../../assets/images/featured/hoiAn.jpg"
import hcm from "../../assets/images/featured/hcm.jpg"
import haNoi from "../../assets/images/featured/haNoi.jpg"

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img className='featuredImg' src={hoiAn} alt='Hoi An'/>
        <div className='featuredTitle'>
          <h1>Hoi An</h1>
          <h2>54 properties</h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img className='featuredImg' src={hcm} alt='Ho Chi Minh'/>
        <div className='featuredTitle'>
          <h1>Ho Chi Minh</h1>
          <h2>203 properties</h2>
        </div>
      </div>

      <div className='featuredItem'>
        <img className='featuredImg' src={haNoi} alt='Ha Noi'/>
        <div className='featuredTitle'>
          <h1>Ha Noi</h1>
          <h2>178 properties</h2>
        </div>
      </div>
      
    </div>
  )
}

export default Featured
