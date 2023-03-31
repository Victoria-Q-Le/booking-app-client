import { faBed, faCalendarDays, faListCheck, faPerson, faPersonWalkingLuggage, faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"

const Header = () => {

  const [open, setOpen] = useState(false)

  const [date, setDate] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }])

  const [options, setOptions] = useState({
    adult: 1,
    children: 0, 
    room: 1
  })
  return (
    <div className='header'>
      <div className='headerContainer'>
        {/* HEADER LIST */}
        <div className='headerList'>
          <div className='headerListItem'>
              <FontAwesomeIcon icon={faListCheck} />
              <span>Before Your Trip</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPersonWalkingLuggage} />
            <span>Attractions</span>
          </div>
        </div>
        {/* END OF HEADER LIST */}

        {/* HEADER TEXT */}
        <h1 className='headerTitle'>
          Your next trip is just a few clicks away
        </h1>
        <p className='headerDesc'>
          Earn rewards from your travels, why not?
        </p>
        {/* END OF HEADER TEXT */}

        {/* HEADER BUTTON */}
        <button className='headerBtn'>Sign in / Register</button>
        {/* END OF HEADER BUTTON */}

        {/* SEARCH BOX */}
        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input type='text' placeholder='Where are we going?'className='headerSearchInput'/>
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span onClick={() => setOpen(!open)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyy")} to ${format(date[0].endDate,"MM/dd/yyy")} `}</span>
            {open && 
              <DateRange 
              editableDateInputs={true} 
              onChange={newDate => setDate([newDate.selection])} 
              moveRangeOnFirstSelection={false}
              ranges={date} 
              className='date'
              />
            }
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span className='headerSearchText'>{`${options.adult} adult - ${options.children} children - ${options.room} room`}
              <div className='options'>
                <div className='optionItem'>
                  <span className='optionText'>Adult</span>
                  <div className='optionCounter'>
                    <button className='optionCounterButton'>-</button>
                    <span className='optionCounterNumber'>1</span>
                    <button className='optionCounterButton'>+</button>
                  </div>
                </div>

                <div className='optionItem'>
                  <span className='optionText'>Children</span>
                  <div className='optionCounter'>
                    <button className='optionCounterButton'>-</button>
                    <span className='optionCounterNumber'>0</span>
                    <button className='optionCounterButton'>+</button>
                  </div>
                </div>

                <div className='optionItem'>
                  <span className='optionText'>Room</span>
                  <div className='optionCounter'>
                    <button className='optionCounterButton'>-</button>
                    <span className='optionCounterNumber'>1</span>
                    <button className='optionCounterButton'>+</button>
                  </div>
                </div>
              </div>
            </span>
          </div>

          <div className='headerSearchItem'>
            <button className='headerBtn'>Search</button>
          </div>
        </div>
        {/* END OF SEARCH BOX */}
      </div>
    </div>
  )
}

export default Header
