import React from 'react'
import './featuredProperties.css'
import SixSense from "../../assets/images/fp/sixsense.jpg"
import Intercon from "../../assets/images/fp/interconDN.jpg"
import Fusion from "../../assets/images/fp/fusion.jpg"

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img  className='fpImg' src={SixSense} alt='Six Senses'/>
        <span className='fpName'>Six Sense Con Dao</span>
        <span className='fpCity'>Con Dao</span>
        <span className='fpPrice'>Starting from $2300</span>
        <div className='fpRating'>
          <button>9.2</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className='fpItem'>
        <img  className='fpImg' src={Intercon} alt='Intercontinental DN'/>
        <span className='fpName'>Intercontinental Da Nang</span>
        <span className='fpCity'>Da Nang</span>
        <span className='fpPrice'>Starting from $1850</span>
        <div className='fpRating'>
          <button>8.5</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className='fpItem'>
        <img  className='fpImg' src={Fusion} alt='Fusion Suites'/>
        <span className='fpName'>Fusion Suites Vung Tau</span>
        <span className='fpCity'>Vung Tau</span>
        <span className='fpPrice'>Starting from $150</span>
        <div className='fpRating'>
          <button>8.0</button>
          <span>Excellent</span>
        </div>
      </div>
    
    </div>
  )
}

export default FeaturedProperties
