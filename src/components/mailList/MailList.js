import React from 'react'
import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save time, save money!</h1>
      <span className='mailDesc'>Subcribe to receive best deal everyday</span>
      <div className='mailInputContainer'>
        <input type='text' placeholder='Enter Your Email'></input>
        <button>Subcribe</button>
      </div>
    </div> 
  )
}

export default MailList
