import React from 'react'
import "./landing.css"
import landingBg from "../../assets/videos/landingBG.mp4"

const Landing = () => {
  return (
    <div className='main'>
      <video src={landingBg} autoPlay muted loop/>
      <div className='content'>
        <h1>Welcome to Viet Nam</h1>
        <p>The only guide you'll need when planning your next trip to Viet Nam.</p>
        <span>Less Planning, More Enjoying</span>
      </div>
    </div>
  )
}

export default Landing
