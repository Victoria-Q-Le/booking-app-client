import React from 'react'
import "./featured.css"
import hoiAn from "../../assets/images/featured/hoiAn.jpg"
import hcm from "../../assets/images/featured/hcm.jpg"

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img src={hoiAn} alt='Hoi An'/>
        <div className='featuredTitle'>
          <h1>Hoi An</h1>
        </div>
      </div>

      <img  src={hcm} alt='Ho Chi Minh'/>
    </div>
  )
}

export default Featured
