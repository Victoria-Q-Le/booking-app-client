import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='fLists'>
        <ul className='fList'>
          <li className='fListItem'>Cities</li>
          <li className='fListItem'>Districts</li>
          <li className='fListItem'>Airports</li>
          <li className='fListItem'>Hotels</li>
          <li className='fListItem'>Place of interest</li>
        </ul>

        <ul className='fList'>
          <li className='fListItem'>Car rental</li>
          <li className='fListItem'>Flight finder</li>
          <li className='fListItem'>Restaurant reservations</li>
        </ul>

        <ul className='fList'>
          <li className='fListItem'>Customer service help</li>
          <li className='fListItem'>Careers</li>
          <li className='fListItem'>Privacy &
           cookie statement</li>
          <li className='fListItem'>Terms & Conditions</li>
        </ul>
      </div>
      <div className='fText'>Copyright © 2023 Victoria Le</div>
    </div>
  )
}

export default Footer
