import React from 'react'
import "./landing.css"
import landingBg from "../../assets/videos/landingBG.mp4"
import { useNavigate } from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate()

  return (
    <div className='landingPage'>
      <video className='video-bg' src={landingBg} autoPlay muted loop />
      <div className='bg-overlay'></div>
      <div className='navBar'>
        <div className='menu'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className='home-text'>
        <h1>Welcome to Viet Guy</h1>
        <p>Let's plan your next trip to Viet Nam with us</p>
      </div>

      <div className='home-btn' onClick={() => {navigate('/home')}}>Explore</div>
    </div>
  )
}

export default Landing
