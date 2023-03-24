import React from 'react'
import landingBg from "../../assets/videos/landingBG.mp4"

const Landing = () => {
  return (
    <div className='main'>
      <video src={landingBg} autoPlay loop muted />
    </div>
  )
}

export default Landing
